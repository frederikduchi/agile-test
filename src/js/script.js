export const init = () => {
    console.log('start executing JavaSript');
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
      console.log('you have clicked');
    })
};
