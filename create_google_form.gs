function createApCsaFrqFeedbackForm() {
  var form = FormApp.create('AP CSA FRQ Feedback Prototype Study');

  form.setDescription(
    'Please watch the video prototype or explore the live demo first, then complete this survey based on your honest impressions. Estimated time: 5-8 minutes. There are no right or wrong answers.\n\n' +
    'Video prototype link: [PASTE YOUR VIDEO LINK HERE]\n' +
    'Live demo link: [PASTE YOUR LIVE DEMO LINK HERE]'
  );

  form.addSectionHeaderItem()
    .setTitle('Section 1: Background');

  form.addMultipleChoiceItem()
    .setTitle('1. Have you practiced AP CSA FRQs before?')
    .setChoiceValues([
      'Yes, many times',
      'Yes, a few times',
      'No, not really'
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('2. How confident are you in understanding FRQ feedback pages in general?')
    .setBounds(1, 7)
    .setLabels('Not confident at all', 'Very confident')
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('Section 2: Final Prototype Ratings');

  var likertQuestions = [
    '3. I can understand why points were lost.',
    '4. I can identify where in my response the issue occurred.',
    '5. I know what to practice next after seeing this feedback.',
    '6. The transition from explanation to action is clear.',
    '7. This prototype would help me improve more independently.',
    '8. I would use this kind of feedback page again.',
    '9. Overall, this feedback experience is useful for AP CSA FRQ improvement.'
  ];

  for (var i = 0; i < likertQuestions.length; i++) {
    form.addScaleItem()
      .setTitle(likertQuestions[i])
      .setBounds(1, 7)
      .setLabels('Strongly disagree', 'Strongly agree')
      .setRequired(true);
  }

  form.addSectionHeaderItem()
    .setTitle('Section 3: Open Feedback');

  form.addParagraphTextItem()
    .setTitle('10. What was the most useful part of the prototype, and why?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('11. What part of the prototype was confusing or less useful?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('12. What is missing from this feedback experience?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('13. If you could change one thing, what would it be?')
    .setRequired(false);

  form.addSectionHeaderItem()
    .setTitle('Section 4: Improvement Confidence');

  form.addScaleItem()
    .setTitle('14. After seeing this prototype, how confident are you that you would know how to improve next time?')
    .setBounds(1, 7)
    .setLabels('Not confident at all', 'Very confident')
    .setRequired(true);

  Logger.log('Form edit URL: ' + form.getEditUrl());
  Logger.log('Form published URL: ' + form.getPublishedUrl());
}
