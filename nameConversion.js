let text_input = document.querySelector("#text");
let button = document.querySelector("#convert-btn");
let text_input_value = "";

button.addEventListener("click", () => {
  text_input_value = text_input.value.toLowerCase();
  
  let type_camel_case = () => {
    let input_value = [...text_input_value];

    let camel = [];
    for (let i = 0; i < input_value.length; i++) {
      if (input_value[i] === " ") {
        camel.push(input_value[i + 1].toUpperCase());
        i += 1;
      } else {
        camel.push(input_value[i]);
      }
    }
    camel = camel.join("");
    console.log(`camel case: ${camel}`);
    let camel_case = document.querySelector("#camel-case");
    camel_case.innerText = camel;
  };
  type_camel_case();
  // pascal-case
  let type_pascal_case = () => {
    let input_value = [...text_input_value];

    let pascal = [];
    for (let i = 0; i < input_value.length; i++) {
      if (input_value[i] === " ") {
        pascal.push(input_value[i + 1].toUpperCase());
        i += 1;
      } else {
        pascal.push(input_value[i]);
      }
    }
    pascal[0] = pascal[0].toUpperCase();
    pascal = pascal.join("");
    console.log(`pascal case: ${pascal}`);
    let pascal_case = document.querySelector("#pascal-case");
    pascal_case.innerText = pascal;
  };

  type_pascal_case();
  // snake-case
  let type_snake_case = () => {
    let input_value = [...text_input_value];

    let snake = [];
    for (let i = 0; i < text_input_value.length; i++) {
      if (input_value[i] === " ") {
        input_value[i] = "_";
        snake.push(input_value[i]);
      } else {
        snake.push(input_value[i]);
      }
    }
    snake = snake.join("");
    console.log(`snake case: ${snake}`);
    let snake_case = document.querySelector("#snake-case");
    snake_case.innerText = snake;
  };

  type_snake_case();

  // screaming-snake-case

  let type_screaming_snake_case = () => {
    let input_value = [...text_input_value];

    let s_snake = [];
    for (let i = 0; i < input_value.length; i++) {
      if (input_value[i] === " ") {
        input_value[i] = "_";
        s_snake.push(input_value[i]);
      } else {
        s_snake.push(input_value[i].toUpperCase());
      }
    }
    s_snake = s_snake.join("");
    console.log(`screaming snake case: ${s_snake}`);
    let screaming_snake_case = document.querySelector("#screaming-snake-case");
    screaming_snake_case.innerText = s_snake;
  };

  type_screaming_snake_case();

  // kebab-case

  let type_kebab_case = () => {
    let input_value = [...text_input_value];

    let kebab = [];
    for (let i = 0; i < input_value.length; i++) {
      if (input_value[i] === " ") {
        input_value[i] = "-";
        kebab.push(input_value[i]);
      } else {
        kebab.push(input_value[i]);
      }
    }
    kebab = kebab.join("");
    console.log(`kebab case: ${kebab}`);
    let kebab_case = document.querySelector("#kebab-case");
    kebab_case.innerText = kebab;
  };

  type_kebab_case();
  // screaming kebab case

  let type_screaming_kebab_case = () => {
    let input_value = [...text_input_value];

    let s_kebab = [];
    for (let i = 0; i < input_value.length; i++) {
      if (input_value[i] === " ") {
        input_value[i] = "-";
        s_kebab.push(input_value[i]);
      } else {
        s_kebab.push(input_value[i].toUpperCase());
      }
    }
    s_kebab = s_kebab.join("");
    console.log(`kebab case: ${s_kebab}`);
    let s_kebab_case = document.querySelector("#screaming-kebab-case");
    s_kebab_case.innerText = s_kebab;
  };

  type_screaming_kebab_case();
  text_input.value = "";
});
