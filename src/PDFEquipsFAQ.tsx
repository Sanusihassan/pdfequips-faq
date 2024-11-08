import React from 'react';
import { Accordion, Panel } from 'rsuite';
import type { FAQSType } from './content/content';
import 'rsuite/Accordion/styles/index.css';

const PDFEquipsFAQ = ({ FAQS }: { FAQS: FAQSType }) => {
    return (
        <Accordion defaultActiveKey="0">
            {FAQS.map((faq, index) => (
                <Panel key={index} header={faq.question} eventKey={index.toString()}>
                    <p>{faq.answer}</p>
                </Panel>
            ))}
        </Accordion>
    );
};

export default PDFEquipsFAQ;