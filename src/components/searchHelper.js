import cheerio from 'cheerio'
import request from 'request'

function parser (url) {
  console.log(url)

  const options = {
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  }
  request(options, (error, response, html) => {
    const $ = cheerio.load(html)
    console.log($)
    console.log(error)
  })
}

export default parser
