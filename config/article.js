export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'b471930a-e96f-11e6-893c-082c54a7f539',

  // canonical URL of the published page
  // https://ig.ft.com/sites/ai-callout get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/ai-callout',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-02-02T18:30:00Z'),

  headline: 'Interested in AI? Help shape our coverage',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'What do you want to know about automation and its impact on jobs?',

  topic: {
    name: 'Artificial Intelligence and Robotics',
    url: 'https://www.ft.com/artificial-intelligence-robotics',
  },

  // relatedArticle: {
  //   text: 'Related article »',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: 'Interested in AI? Help shape our coverage',
    description: 'Robot hand reaching out to human hand',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A61dde354-c6b1-11e6-9043-7e34c07b46ef?source=ig&width=2048&height=1152',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Robin Kwong', url: 'https://www.ft.com/stream/authorsId/Q0ItZGIwM2YzMg==-QXV0aG9ycw==' },
    { name: 'Lilah Raptopoulos', url: 'https://www.ft.com/stream/authorsId/YWFhZjY4NWUtNTY3MS00ZTZiLWE3MDQtY2YyMzE5NDRmMzUz-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: 'A reader callout asking FT subscribers to help shape our coverage of the impact artificial intelligence and automation will have on jobs'

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
