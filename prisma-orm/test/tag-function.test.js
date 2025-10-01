function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test("tagFunction", () => {
    const name = "amri";
    tagFunction`hello ${name}, how are you?`;
    tagFunction`Bye ${name}, see you later?`;
})

test("tag Function sql query", () => {
    const name = "amri";
    const age = 22;
    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})