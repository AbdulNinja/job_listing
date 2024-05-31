fetch('data.json')
    .then(data => data.json())
    .then(res => {
        data = res;
        createList(data);
    });