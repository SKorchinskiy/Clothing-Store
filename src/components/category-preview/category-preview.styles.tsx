import styled from "styled-components";

export const CategoryPreviewItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 20px;
  row-gap: 30px;

  @media screen and (max-width: 400px) {
    width: 80%;
    margin: auto;
  }

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    span {
      cursor: pointer;
      font-family: "Josefin Slab";
    }
  }
`;
