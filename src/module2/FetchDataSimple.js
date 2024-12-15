import React from "react"

const FetchData = () => {
  const [user, SetUser] = React.useState(null)

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        SetUser(data)
      })
      .catch((error) => console.log(error))
  }

  React.useEffect(() => {
    fetchData()
  }, [])

 if (!user) {
   return <h1>Pending...</h1>
 }

 const { name, picture } = user.results[0]

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>Name: {name.first} {name.last}</h2>
      <img src={picture.large} alt="profile"/>
    </div>
  ) : (
    <h1>Pending...</h1>
  )
}

export default FetchData

/*
Results:

object
{2}
results
[1]
0
{12}
gender
:
"female"
name
{3}
title
:
"Miss"
first
:
"Caroline"
last
:
"Pierce"
location
{7}
street
{2}
number
:
2921
name
:
"Grafton Street"
city
:
"Arklow"
state
:
"Limerick"
country
:
"Ireland"
postcode
:
33370
coordinates
{2}
latitude
:
"-2.0178"
longitude
:
"111.8819"
timezone
{2}
offset
:
"+3:00"
description
:
"Baghdad, Riyadh, Moscow, St. Petersburg"
email
:
"caroline.pierce@example.com"
login
{7}
uuid
:
"3b084308-49f1-4ef9-935f-0e50a74997f0"
username
:
"whitebear890"
password
:
"eugene"
salt
:
"L9f30Mgm"
md5
:
"b77afcc6b2ec78ff55df76e249b987e2"
sha1
:
"e15c94a0d4bd1bba87aa3b3c6b93e5520ada772c"
sha256
:
"b7c10105729c7ebc1e86b627ce144213813326aa65dbb72406471b81c4c773d6"
dob
{2}
date
:
"1965-03-15T04:05:04.965Z"
age
:
59
registered
{2}
date
:
"2002-04-01T11:31:25.724Z"
age
:
22
phone
:
"041-266-4901"
cell
:
"081-605-2220"
id
{2}
name
:
"PPS"
value
:
"0365606T"
picture
{3}
large
:
"https://randomuser.me/api/portraits/women/61.jpg"
medium
:
"https://randomuser.me/api/portraits/med/women/61.jpg"
thumbnail
:
"https://randomuser.me/api/portraits/thumb/women/61.jpg"
nat
:
"IE"
info
{4}
seed
:
"a03e4cf0a085b0da"
results
:
1
page
:
1
version
:
"1.4"



*/