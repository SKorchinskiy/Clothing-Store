import styled from "styled-components";

export const CategoryPreviewItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 30px;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    cursor: pointer;

    span {
      font-family: "Josefin Slab";
    }
  }
`;
