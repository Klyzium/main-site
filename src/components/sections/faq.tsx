import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FaqItem } from "@/components/sections/cards/faq-item";
import { SectionHeader } from "@/components/sections/section-header";
import { FAQS } from "@/content/landing";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-slate-50">
      <Container className="max-w-3xl xl:max-w-3xl">
        <SectionHeader title="Perguntas frequentes" />

        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
