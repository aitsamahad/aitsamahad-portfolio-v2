import useSWR from "swr";
import { useEffect, useState } from "react";

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(
    `${process.env.API_URL || "https://strapi-scraps.herokuapp.com"}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export function getExample() {
  // Wraper for Fetching data using SWR
  //   async function fetcher(url) {
  //     const response = await fetch("https://uinames.com/api/?ext");
  //     const data = response.json();
  //   };
  const fetcher = url => fetch(url).then(r => r.json());
  // SWR Hook
  const { data, error } = useSWR(
    "https://strapi-scraps.herokuapp.com/scraps",
    fetcher
  );
  if (data) return console.log(data);
  if (error) return console.log(error);
}

export async function getScraps() {
  const data = await fetchAPI(`query Scraps {
      scraps(sort: "published_at:desc") {
        id
        title
        category {
          id
          name
        }
        image {
          url
          alternativeText
        }
      }
    }`);
  return data.scraps;
}

export async function getScrap(id) {
  const data = await fetchAPI(
    `query Scraps($id: ID!) {
      scrap(id: $id) {
        id
        title
        content
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
        published_at
      }
    }`,
    { variables: { id } }
  );
  return data.scrap;
}

export async function getCategories() {
  const data = await fetchAPI(`query Categories {
      categories {
        id
        name
      }
    }`);
  return data.categories;
}

export async function getCategory(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
      category(id: $id) {
        id
        name
        scraps {
          id
          title
          content
          image {
            url
            alternativeText
          }
          category {
            id
            name
          }
        }
      }
    }
  `,
    { variables: { id } }
  );
  return data.category;
}
