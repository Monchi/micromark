'use strict'

var test = require('tape')
var m = require('../../..')

test('dangerous-html', function (t) {
  t.equal(m('<x>'), '&lt;x&gt;', 'should be safe by default')

  t.equal(m('a<b>'), '<p>a&lt;b&gt;</p>', 'should be safe by default for spans')

  t.equal(
    m('<x>', {allowDangerousHtml: true}),
    '<x>',
    'should be unsafe w/ `allowDangerousHtml`'
  )

  t.end()
})
