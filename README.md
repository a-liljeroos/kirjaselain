<h1>Kirjaselain</h1>

<p>a simple single-page web application which manages a collection of books</p>

<h4>Requirements</h4>
<ul>
<li><a href="https://nodejs.org/en/" target="_blank">NodeJs</a></li>
</ul>

<h4>1. Install</h4>
<ul style="list-style: none;">
<li>'node kirjaselain-install.js'</li>
</ul>

<h4>2. Run</h4>
<ul style="list-style: none;">
<li >'node kirjaselain-start.js'</li>
</ul>

<h4>Book datatable</h4>

```json
{
  "id": "Number",
  "title": "String",
  "author": "String",
  "desc": "String"
}
```

<table>
  <h3>API endpoints</h3>
  <tr>
    <th>Method</th>
    <th>URL</th>
    <th>Input params</th>
    <th>Output params</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/books</td>
    <td>-</td>
    <td>[Book]</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/books/add</td>
    <td>title, author</td>
    <td>-</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/books/delete</td>
    <td>id</td>
    <td>-</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/books/put</td>
    <td>id, title, author</td>
    <td>-</td>
  </tr>
</table>
