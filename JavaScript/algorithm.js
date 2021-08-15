// get_from_array_list
let list = [{
        id: 1,
        name: "a",
        child: [{
                id: 2,
                name: "b"
            },
            {
                id: 3,
                name: 'c',
                child: [{
                    id: 4,
                    name: "fefef3"
                }]
            }
        ]
    },
    {
        id: 7,
        name: "f"
    }
]






get_from_array_list = (array, id, name) => {
    let result = '';
    let fuc = (item) => {
        for (let i = 0; i < item.length; i++) {
            if (item[i].id == id) {
                result = item[i][name];
                break;
            }
            if (item[i].child) {
                fuc(item[i].child);
            }
        }
    };
    fuc(array);
    return result;
}

console.log(d)