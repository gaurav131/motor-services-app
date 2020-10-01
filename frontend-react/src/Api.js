const api = 'http://localhost:5000'

// let token = localStorage.token
//
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

// const headers = {
//   'Accept': 'application/json',
//   'Authorization': token
// }

export const loginApi = (email, password) =>
  fetch(`${api}/login/`, {
    method: 'post',
    body: JSON.stringify({'email': email, 'password': password})
  })
    .then(res => res.json()).then(res => res)

export const createAccountApi = (userid, password, name) =>
  fetch(`${api}/signup/`, {
    method: 'post',
    body: JSON.stringify({'email': userid, 'password': password, 'name': name})
  })
    .then(res => res.json()).then(res => res)

export const testApi = (token) =>
  fetch(`${api}/authenticate/`, {
    method: 'post',
    headers: {'Accept': 'application/json', 'Authorization': 'Bearer '+token},
    body: JSON.stringify({'userid': 'userid', 'password': 'password'})
  })
    .then(res => res.json()).then(res => res)

// export const remove = (contact) =>
//   fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
//     .then(res => res.json())
//     .then(data => data.contact)
//
// export const create = (body) =>
//   fetch(`${api}/contacts`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json())