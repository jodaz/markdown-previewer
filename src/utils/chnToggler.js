// Change toggler object

const chnToggler = (toggle, name) => {
  let newNameState = !toggle[name];
  toggle[name] = newNameState;

  return toggle;
}

export default chnToggler;
