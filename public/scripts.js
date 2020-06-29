$(document).ready(function () {
  io('http://localhost:3000', {
    query: {
      user_id: '1'
    }
  })
})
