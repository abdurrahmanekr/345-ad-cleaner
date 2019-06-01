var data = document.querySelectorAll("a[target='iframe_345']");

data.forEach(x => {
    x.href = x.href.replace(/.*player\.php\?https/g, 'https');
});
