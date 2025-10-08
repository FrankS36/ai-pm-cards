/**
 * Generate PDF files from HTML templates
 *
 * Usage: node generate-pdfs.js
 *
 * Requires: npm install puppeteer
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templates = [
  {
    html: 'progressive-disclosure-worksheet.html',
    pdf: 'progressive-disclosure-worksheet.pdf'
  },
  {
    html: 'risk-assessment-scorecard.html',
    pdf: 'risk-assessment-scorecard.pdf'
  },
  {
    html: 'ai-opportunity-canvas.html',
    pdf: 'ai-opportunity-canvas.pdf'
  }
];

async function generatePDFs() {
  console.log('🚀 Starting PDF generation...\n');

  const browser = await puppeteer.launch({
    headless: 'new'
  });

  for (const template of templates) {
    const htmlPath = path.join(__dirname, 'public', 'templates', template.html);
    const pdfPath = path.join(__dirname, 'public', 'templates', template.pdf);

    console.log(`📄 Generating ${template.pdf}...`);

    const page = await browser.newPage();

    // Load the HTML file
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });

    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });

    console.log(`✅ Created ${template.pdf}`);
  }

  await browser.close();

  console.log('\n🎉 All PDFs generated successfully!');
  console.log('\nFiles created in: public/templates/');
  templates.forEach(t => console.log(`  - ${t.pdf}`));
}

generatePDFs().catch(error => {
  console.error('❌ Error generating PDFs:', error);
  process.exit(1);
});
