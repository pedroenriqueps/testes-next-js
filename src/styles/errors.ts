"use client";
import styled from "styled-components";

export const ErrorContainer = styled.main`
  width: 100;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 5rem auto;
  color: red;
`;

export const ErrorTitle = styled.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin: 1rem 0;
`;

export const ErrorButton = styled.div`
  border: 1.2px solid #020202;
  margin: 1rem 0;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  transition: 0.3s all ease-out;
  &:hover {
    background-color: #020202;
  }
`;
