import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import DashboardWrapped from "../Components/DashboardWrapped";

export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#1E272E",
        paddingTop: 50,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Text}>GOOD MORNING Rebecca!</Text>
        <Image source={require("../assets/search-icon.png")} />
        <Image source={require("../assets/menu-icon.png")} />
      </View>

      <View>
        <Text style={styles.Text}>My Playlists</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Text}>Recently Played</Text>
        <Image
          source={require("../assets/weeknd-icon.png")}
          style={{ width: 20, height: 20 }}
        />
        <Image
          source={require("../assets/kendrick-icon.png")}
          style={{ width: 20, height: 20 }}
        />
        <Image
          source={require("../assets/selena-icon.png")}
          style={{ width: 20, height: 20 }}
        />
        <Image
          source={require("../assets/eminem-icon.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>

      <Text style={styles.Text}>2021 wrapped</Text>
      <DashboardWrapped />

      <Text style={styles.Text}>Popular</Text>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Image
            source={require("../assets/dua-icon.png")}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={styles.Text}>Dua Lipa</Text>
        </View>
        <Image
          source={require("../assets/weeknd-icon.png")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Image
          source={require("../assets/ed-icon.png")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
          alt="Ed Sheeran"
        />
        <Image
          source={require("../assets/selena-icon.png")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </View>

      <Text style={styles.Text}>Bar</Text>
      <View style={{ flexDirection: "row" }}>
        <ImageBackground source={require("../assets/rectangle-icon.png")} />

        <Image source={require("../assets/home-icon.png")} />
        <Image source={require("../assets/search-icon.png")} />
        <Image source={require("../assets/library-icon.png")} />
        <Image source={require("../assets/shopping-icon.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "white",
    margin: 15,
  },
});
