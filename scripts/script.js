const navItems = [
    {text: 'Home', href:'#'},
    {text: 'Browse'},
    {text: 'Search', href:'#'},
    { text: 'Messages', href: '#' },
    { text: 'Layouts', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Bulletins', href: '#news-blog' },
    { text: 'Forum', href: '#' },
    { text: 'Music Charts', href: '#' },
    { text: 'Favourites', href: '#' },
    { text: 'Invite', href: '#' },
    { text: 'Groups', href: '#' },
    { text: 'About', href: '#' }
]
const nav = document.querySelector('.top-nav-buttons');

nav.innerHTML = navItems.map(item => `<a href="${item.href}">${item.text}</a>`).join('|');// для того чтобы была не запятая между значениями добавил join | 
// console.log(nav.innerHTML)

// navItems.map((item) => console.log(item, navItems, 'sdfghjkl'))


const editItems = [
    {text: 'Edit Profile', href:'#'},
    {text: 'Edit status'},
    {text: 'Edit Your Links', href:'#'},
    { text: 'Add/Edit Photo', href: '#' },
    { text: 'Account Settings', href: '#' },
    { text: 'Manage Blog', href: '#' }
]

const edit =  document.querySelector('.left-actions');

edit.innerHTML =  editItems.map(item=> `<a href="${item.href}">${item.text}</a>`).join('<br>');


const viewMyContent = [
    {text: 'Profile', href:'#'},
    {text: 'Blog'},
    {text: 'Bulletins', href:'#'},
    { text: 'Forum Topics', href: '#' },
    { text: 'Comments', href: '#' },
    { text: 'Friends', href: '#' },
    { text: 'Blocked Users', href: '#' },
]

const viewMy =  document.querySelector('.left-bottom');

viewMy.innerHTML = `<b>View my:</b> ` +  viewMyContent.map(item=> `<a href="${item.href}">${item.text}</a>`).join('&nbsp; |&nbsp; ');



const friendsContent = [
    { from: 'Neil Proudfoot',  href:'#', subject: 'Uhhhh' },
    { from: 'Neil Proudfoot', href:'#', subject: 'Hello'  },
    { from: 'Katie', href:'#',subject: 'Hi there' },
    { from: 'Ekaterina YourMenti', href:'#', subject: 'Have you done your HW?' }
]

// const friends =  document.querySelector('.friends-news');

// friends.innerHTML = friendsContent.map(item=>  `${item.from}`+ "&nbsp;"+ `${item.subject}`).join('<br>');

const friends = document.querySelector('.friends-news');

friends.innerHTML = `   <tr>
            <th>From</th>
            <th>Subject</th>
        </tr> ` + friendsContent.map(item =>  `
    
    <tr>
        <td> <a href="${item.href}">${item.from} </a></td>
        <td> <h3 href="${item.href}">${item.subject}</h3></td>
    </tr>
`).join('');