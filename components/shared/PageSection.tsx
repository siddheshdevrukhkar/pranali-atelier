import Container from "./Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type PageSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  background?: "default" | "white";
  children: React.ReactNode;
};

export default function PageSection({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
  background,
  children,
}: PageSectionProps) {
  return (
    <Section id={id} className={className} background={background}>
      <Container className="space-y-14">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />

        {children}
      </Container>
    </Section>
  );
}
