import { FIRST_COL, FOURTH_COL, SECOND_COL, THIRD_COL } from './mock';
import { Container, Link, LinkItem, LinksList, Wrapper } from './styles';
import { Props } from './types';

export function Footer({ className }: Props) {
  return (
    <Container className={className}>
      <Wrapper>
        <LinksList>
          {FIRST_COL.map((link) => (
            <LinkItem key={link.name}>
              <Link label={link.name} href={link.url} variant="link" />
            </LinkItem>
          ))}
        </LinksList>
        <LinksList>
          {SECOND_COL.map((link) => (
            <LinkItem key={link.name}>
              <Link label={link.name} href={link.url} variant="link" />
            </LinkItem>
          ))}
        </LinksList>
        <LinksList>
          <LinkItem>
            <Link label={THIRD_COL.name} href={THIRD_COL.url} variant="link" />
          </LinkItem>
        </LinksList>
        <LinksList>
          <LinkItem>
            <Link
              label={FOURTH_COL.name}
              href={FOURTH_COL.url}
              variant="link"
            />
          </LinkItem>
        </LinksList>
      </Wrapper>
    </Container>
  );
}
