import React, { useState, useEffect } from "react";
import { Container, Content, Text } from "native-base";

import Plant from "../components/Plant";

const axios = require("axios").default;
GLOBAL = require("../global");

export default function ProfileScreen() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://backyardhacks2020.wl.r.appspot.com/api/v1/plants/user/${GLOBAL.id}`
      );
      setPlants(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Content padder>
        {plants.length == 0 ? (
          <Text style={{textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 5}}>You don't haven't seen any flowers, get looking!</Text>
        ) : (
          plants.map((plant) => <Plant style={{textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 5}}plant={plant} key={plant._id} />)
        )}
      </Content>
    </Container>
  );
}
// props.navigation.navigate("PlantDetail")
