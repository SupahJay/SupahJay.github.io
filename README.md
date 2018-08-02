# SupahJay.github.io
I created this as a test of the GitHub Pages, and looks like this one is something like my "Main Github Page". So I wont delete this for a while...
Right now I'm using it to test jekill



#Jekyll data:
- Loop over posts:
`Looping over post's object looks just like JS and somewhat php`
Just like in Js the data inside the object can be acessed by ObjectName.Keyname.
And just like php you start the code inside php, but here is like: {{code here}} to call the var data
Inside the post I should put data about the post like:

`---
Key: Value
ExampleKey: Example Value :o
Links: WWW.GOOGLE.COM
---`
-Posts Names:
`0000-00-00-Name`

`
{% for arrayName in site.post %}
code here// html or anything I like
<p>here is a link</p>{{arrayName.link}}
{% endfor %}
`