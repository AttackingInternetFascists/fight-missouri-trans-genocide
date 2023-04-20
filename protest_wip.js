const puppeteer = require('puppeteer')

const { Chance } = require('chance')
const chance = new Chance()

const firstName = chance.first()
const lastName = chance.last()
const street = chance.address()
const city = chance.city()
const state = 'MO'
const zip = chance.integer({ min: 63001, max: 65899 }).toString()
const phone = ''

const message = `
Missouri's new law that limits access to transgender healthcare is a violation of basic human rights and dignity. Denying healthcare to a group of people simply because of their gender identity is discriminatory and unjust.

Transgender individuals face numerous challenges, including discrimination, violence, and mental health issues. Access to healthcare is crucial for their well-being and survival. Denying them medical treatment only exacerbates their struggles and denies them the basic human right to health.

Moreover, limiting access to healthcare for transgender individuals goes against the medical community's consensus that gender-affirming care is necessary for transgender people's physical and mental health. Denying them access to healthcare is not only unjust but also puts their lives at risk.

Therefore, Missouri should repeal this law and ensure that all individuals, regardless of their gender identity, have equal access to healthcare. We must stand up against discrimination and ensure that everyone has the opportunity to lead a healthy and fulfilling life.
`

const emailPrefix = chance.pickone([
  `${firstName}.${lastName}`,
  `${firstName}.${lastName}`,
  `${firstName[0]}${lastName}`,
  `${firstName[0]}${lastName}${chance.integer({ min: 0, max: 999 })}`,
  `${chance.animal()}${chance.animal()}${chance.integer({ min: 0, max: 999 })}`,
  `${chance.animal()}.${chance.animal()}.${chance.integer({ min: 0, max: 999 })}`,
])

const emailDomain = chance.pickone([
  chance.domain(),
  chance.pickone([
    'gmail.com',
    'protonmail.com',
    'yahoo.com',
    'aol.com',
    'outlook.com'
  ])
])

const email = chance.pickone([
  chance.email(),
  chance.email({ domain: emailDomain }),
  `${emailPrefix}@${emailDomain}`,
])

;(async () => {

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://ago.mo.gov/file-a-complaint/transgender-center-concerns')
  await page.type('input[name="TextFieldController_0"]', email)
  await page.type('input[name="TextFieldController_1"]', street)
  await page.type('input[name="TextFieldController_2"]', city)
  await page.type('input[name="TextFieldController_3"]', phone)
  await page.type('input[name="TextFieldController_4"]', firstName)
  await page.type('input[name="TextFieldController_5"]', lastName)
  await page.type('input[name="TextFieldController_6"]', zip)
  await page.type('select[name="DropdownListFieldController"]', state)
  await page.type('textarea[name="ParagraphTextFieldController"]', message)

  const imageSelector = 'img[data-sf-role="captcha-image"]'
  const audioSelector = 'audio[data-sf-role="captcha-audio"]'

  await page.waitForSelector(imageSelector)
  await page.waitForSelector(audioSelector)
  
  const imageData = await page.$eval(imageSelector, e => e.getAttribute('src'))
  const audioData = await page.$eval(audioSelector, e => e.getAttribute('src'))
  
  // TODO: Get the captcha code
  const captchaCode = 'TEST'

  await page.type('input[name="captcha-a"]', captchaCode)
  // await page.click('button[type="submit"]')

  await page.screenshot({ path: './screenshot.png', fullPage: true })

  await browser.close()
})()