import { isString } from '$/utils/types';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useRouterState = (name: string, defaultValue?: string) => {
  const router = useRouter();
  const [value, setValue] = useState<string>();
  const routerQuery = useRef<{ [key: string]: string | string[] | undefined }>(
    {},
  );

  useEffect(() => {
    routerQuery.current = router.query;
  }, [router]);

  useEffect(() => {
    if (!router.isReady) return;
    const currentParamValue = router.query[name];

    if (isString(currentParamValue)) {
      setValue(currentParamValue);
    } else {
      setValue(defaultValue);
    }
  }, [name, router.query, router.isReady, defaultValue]);

  const setRouterValue = useCallback(
    async (newValue: string) => {
      if (routerQuery.current) {
        if (!newValue) {
          delete routerQuery.current[name];
        } else {
          routerQuery.current[name] = newValue;
        }

        setValue(newValue);
        await router.replace({
          pathname: router.pathname,
          query: routerQuery.current,
        });
      }
    },
    [name, router],
  );

  return [value, setRouterValue] as const;
};
