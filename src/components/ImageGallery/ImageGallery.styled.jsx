import styled from "styled-components";


export const ImageLarge = styled.img `
object-fit: fill;
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid rgba(254,124,10,1);
`
export const ImagesGallery = styled.ul `display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;`
