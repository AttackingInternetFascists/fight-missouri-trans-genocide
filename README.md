# Protest Trans Genocide in Missouri

## The Message

Missouri's new law that limits access to transgender healthcare is a violation of basic human rights and dignity. Denying healthcare to a group of people simply because of their gender identity is discriminatory and unjust.

Transgender individuals face numerous challenges, including discrimination, violence, and mental health issues. Access to healthcare is crucial for their well-being and survival. Denying them medical treatment only exacerbates their struggles and denies them the basic human right to health.

Moreover, limiting access to healthcare for transgender individuals goes against the medical community's consensus that gender-affirming care is necessary for transgender people's physical and mental health. Denying them access to healthcare is not only unjust but also puts their lives at risk.

Therefore, Missouri should repeal this law and ensure that all individuals, regardless of their gender identity, have equal access to healthcare. We must stand up against discrimination and ensure that everyone has the opportunity to lead a healthy and fulfilling life.

## Understanding Genocide

The creation of a website for reporting "transgender concerns" by the Missouri district attorney is deeply concerning and has the potential to perpetuate discrimination and violence against the transgender community. It is important to recognize the historical context of registries and the devastating impact they have had on marginalized groups, particularly in the context of genocide.

Registries have been used throughout history to target and discriminate against specific groups of people, often leading to horrific outcomes. For example, during the Holocaust, the Nazis created a registry of Jews that ultimately led to the genocide of six million Jewish people. More recently, the US government created a registry of Muslim immigrants, which was later found to be discriminatory and was shut down.

The creation of a registry for transgender individuals is not only discriminatory but could also be a prelude to more severe forms of violence and oppression. Such a registry could be used to track, target, and harm transgender individuals, and it could also create an environment of fear and intimidation, leading to a decrease in the community's access to essential services and resources.

It is crucial to resist the creation of such a registry and to stand up against any form of discrimination and violence against transgender individuals. Instead, we should work to create safe and inclusive environments that respect everyone's human rights and dignity. Transgender people deserve the same protections as everyone else, and any attempt to create a registry based on their identity is a violation of their basic human rights.

### 10 Stages of Genocide: Stage 8, Persecution

![image](https://user-images.githubusercontent.com/114874765/233242905-2d8bb4a4-5ea4-4e81-b067-44b7230b1007.png)

> Victims are identified because of their ethnicity or religion and death lists are drawn up. People are sometimes segregated into ghettos, deported or starved and property is often expropriated. Genocidal massacres begin.
>
> _https://www.hmd.org.uk/learn-about-the-holocaust-and-genocides/what-is-genocide/the-ten-stages-of-genocide/_

## Mechanisms

### Manually

Head on over to the [Missouri Transgender Center Concerns Form](https://ago.mo.gov/file-a-complaint/transgender-center-concerns) and send them a message communicating your thoughts via their standard form.

### Automa

This repository contains a script for [Automa](https://www.automa.site/) that will
 * autofill the form with random contact information, and "The Message"
 * ask you to enter a captcha
 * submit the form

#### How do I shot web?

  1. [Install Automa following the instructions on their website](https://www.automa.site/)
  2. [Follow the Automa instructions for importing a workflow](https://docs.automa.site/workflow/overview.html#export-and-import-a-workflow)
  3. Click the Start ▶ button on the "Protest Trans Genocide in Missouri" workflow.
  4. When prompted, enter the captcha.
  5. **We want to discourage users from abusing this script to submit multiple reports, as it may make it difficult for the Missouri District Attorney to sort through the volume of additional reports.**

### cURL

If you're a nerd, here's a cURL minus captcha

It accepts the following environment variables:
 * `FNAME`
 * `LNAME`
 * `ADDRESS`
 * `CITY`
 * `STATE`
 * `ZIP`
 * `EMAIL`
 * `PHONE`
 * `MESSAGE`

```sh
curl 'https://ago.mo.gov/file-a-complaint/transgender-center-concerns' \
  -H 'content-type: multipart/form-data; boundary=fascism' \
  --data-raw $'--fascism\r\nContent-Disposition: form-data; name="TextFieldController_4"\r\n\r\n${FNAME}\r\n--fascism\r\nContent-Disposition: form-data; name="TextFieldController_5"\r\n\r\n${LNAME}\r\n--fascism\r\nContent-Disposition: form-data; name="TextFieldController_1"\r\n\r\n${ADDRESS}\r\n--fascism\r\nContent-Disposition: form-data; name="TextFieldController_2"\r\n\r\n${CITY}\r\n--fascism\r\nContent-Disposition: form-data; name="DropdownListFieldController"\r\n\r\n${STATE}\r\n--fascism\r\nContent-Disposition: form-data; name="TextFieldController_6"\r\n\r\n${ZIP}\r\n--fascism\r\nContent-Disposition: form-data; name="TextFieldController_0"\r\n\r\${EMAIL}\r\n--fascism\r\nContent-Disposition: form-data; name="TextFieldController_3"\r\n\r\n${PHONE}\r\n--fascism\r\nContent-Disposition: form-data; name="ParagraphTextFieldController"\r\n\r\n${MESSAGE}\r\n--fascism--\r\n' \
  --compressed
```
