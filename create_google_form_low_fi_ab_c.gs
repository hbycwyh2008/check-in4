/**
 * Google Apps Script — Low-fi A/B/C comparison form (matches Check-In 1 wireframes + paper survey)
 *
 * Stimulus image: extracted from Individual_Project_Check_In_1 PDF (Figure 1) →
 *   low-fi-wireframes/checkin1-p3-img1.png
 * Push that file to GitHub, then UrlFetch can load it via raw.githubusercontent.com.
 *
 * RUN: script.google.com → New project → paste → Run `createLowFiThreeDesignsComparisonForm`
 */

/** One composite image: columns = Design A | Design B | Design C (same as Check-In 1). */
var LOW_FI_COMPOSITE_URL =
  'https://raw.githubusercontent.com/hbycwyh2008/individual-project/main/low-fi-wireframes/checkin1-p3-img1.png';

/** Optional: three separate images (if set, each appears above its grid). Leave '' to use composite only. */
var LOW_FI_IMAGE_URL_A = '';
var LOW_FI_IMAGE_URL_B = '';
var LOW_FI_IMAGE_URL_C = '';

function addImageFromUrl_(form, url, title) {
  if (!url || url.length < 8) return false;
  try {
    var resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (resp.getResponseCode() !== 200) {
      Logger.log('Image HTTP ' + resp.getResponseCode() + ' for ' + title);
      return false;
    }
    form.addImageItem().setImage(resp.getBlob()).setTitle(title);
    return true;
  } catch (e) {
    Logger.log('Image failed: ' + title + ' — ' + e);
    return false;
  }
}

function createLowFiThreeDesignsComparisonForm() {
  var form = FormApp.create('AP Practice Feedback — Design A/B/C Comparison (Low-fi)');

  form.setTitle('AP Practice Feedback — Design A/B/C Comparison (Low-fi)');
  form.setDescription(
    'Time: about 5–8 minutes. Compare three low-fi feedback page designs (A / B / C).\n\n' +
      'No right or wrong answers — honest impressions only.\n\n' +
      '🎬 Scenario: You just finished a practice assignment and open the feedback page. You want to:\n' +
      '1) find where you lost points,\n' +
      '2) understand why you lost points,\n' +
      '3) know what to do next.\n\n' +
      '🌈 Scale: SD = Strongly Disagree · D = Disagree · A = Agree · SA = Strongly Agree\n\n' +
      '📷 Below: one figure with three columns — LEFT = Design A (Rubric breakdown), CENTER = Design B (Anchored feedback), RIGHT = Design C (Practice plan). Refer to it for all rating questions.'
  );

  var hasSplit = LOW_FI_IMAGE_URL_A && LOW_FI_IMAGE_URL_B && LOW_FI_IMAGE_URL_C;
  if (hasSplit) {
    addImageFromUrl_(form, LOW_FI_IMAGE_URL_A, 'Design A — Rubric breakdown (low-fi)');
    addImageFromUrl_(form, LOW_FI_IMAGE_URL_B, 'Design B — Anchored feedback (low-fi)');
    addImageFromUrl_(form, LOW_FI_IMAGE_URL_C, 'Design C — Practice plan (low-fi)');
  } else if (!addImageFromUrl_(form, LOW_FI_COMPOSITE_URL, 'Low-fi wireframes — A (left), B (center), C (right)')) {
    form
      .addSectionHeaderItem()
      .setTitle('Wireframe figure — action required')
      .setHelpText(
        'The script could not load the image (push low-fi-wireframes/checkin1-p3-img1.png to GitHub first, or fix LOW_FI_COMPOSITE_URL). In the Form editor, click + and add this PNG manually above the first question.'
      );
  }

  var likertCols = ['Strongly Disagree (SD)', 'Disagree (D)', 'Agree (A)', 'Strongly Agree (SA)'];

  form.addSectionHeaderItem().setTitle('Section 1 — Background');

  form
    .addMultipleChoiceItem()
    .setTitle('1. Have you practiced AP CSA FRQs before?')
    .setChoiceValues(['Yes, many times', 'Yes, a few times', 'No, not really'])
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('2. How confident are you in using an FRQ feedback page?')
    .setBounds(1, 7)
    .setLabels('Not confident at all', 'Very confident')
    .setRequired(true);

  form.addSectionHeaderItem().setTitle('Section 2 — Design A (Rubric breakdown)');
  if (hasSplit) {
    /* images already at top */
  }

  form
    .addGridItem()
    .setTitle('Design A — circle one per row (SD / D / A / SA)')
    .setHelpText('Refer to the LEFT column of the wireframe figure.')
    .setRows([
      'A1. I can find where I lost points.',
      'A2. I can understand why I lost points.',
      'A3. “Rubric Item Detail” helps me understand what I missed.',
      'A4. “Evidence (Highlighted)” helps me connect my response to the rubric.',
      'A5. “Final: Action Plan + Example” tells me what to do next.',
    ])
    .setColumns(likertCols)
    .setRequired(true);

  form.addSectionHeaderItem().setTitle('Section 3 — Design B (Anchored feedback)');

  form
    .addGridItem()
    .setTitle('Design B — circle one per row (SD / D / A / SA)')
    .setHelpText('Refer to the CENTER column of the wireframe figure.')
    .setRows([
      'B1. I can find where I lost points.',
      'B2. I can understand why I lost points.',
      'B3. “Response + Comments” helps me understand my mistakes.',
      'B4. “Comment Detail” helps me see what’s missing.',
      'B5. “Final: Issues → Actions” tells me what to do next.',
    ])
    .setColumns(likertCols)
    .setRequired(true);

  form.addSectionHeaderItem().setTitle('Section 4 — Design C (Practice plan)');

  form
    .addGridItem()
    .setTitle('Design C — circle one per row (SD / D / A / SA)')
    .setHelpText('Refer to the RIGHT column of the wireframe figure.')
    .setRows([
      'C1. I can find where I lost points.',
      'C2. I can understand why I lost points.',
      'C3. “Mistake Summary” clearly explains what went wrong.',
      'C4. “Practice Checklist” is useful for improving.',
      'C5. “Final: 10-min Practice Plan” tells me what to do next.',
    ])
    .setColumns(likertCols)
    .setRequired(true);

  form.addSectionHeaderItem().setTitle('Section 5 — Choose + rank');

  form
    .addMultipleChoiceItem()
    .setTitle('3. Which design would you choose as your default feedback page?')
    .setChoiceValues([
      'A (Rubric breakdown)',
      'B (Anchored feedback)',
      'C (Practice plan)',
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle(
      '4. Why did you choose that design? (Refer to specific parts, e.g. “Rubric Item Detail”, “Comment Detail”, “Practice Checklist”, “Final: …”)'
    )
    .setRequired(false);

  form
    .addParagraphTextItem()
    .setTitle(
      '5. Rank the designs from best to worst for helping you improve (1 = best). Example: “A=1, B=3, C=2”.'
    )
    .setRequired(false);

  form.addSectionHeaderItem().setTitle('Section 6 — Confidence + open feedback');

  form
    .addScaleItem()
    .setTitle('6. Based on your chosen design, how confident are you that you can improve next time?')
    .setBounds(1, 7)
    .setLabels('Not confident at all', 'Very confident')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('7. What is the most useful part (screen) across all designs? Why?')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('8. What is the most confusing or least useful part across all designs? Why?')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('9. What is missing that you wish the feedback page included?')
    .setRequired(false);

  Logger.log('Edit form (verify image loads): ' + form.getEditUrl());
  Logger.log('Published: ' + form.getPublishedUrl());
}
