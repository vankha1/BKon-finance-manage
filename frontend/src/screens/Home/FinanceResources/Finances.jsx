import { View, Text, Pressable, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import FinanceResources from "../../../components/FinanceResource/FinanceResources";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { SIZES, FONTFAMILIES, COLORS } from "../../../constants";
import Header from "../../../components/Header/Header";
import styles from "./styles";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const Finances = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigator = useNavigation();

  const navigateTo = (screen) => {
    navigator.navigate(screen);
  };

  const handleVisibleModal = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header title={"Finance Resources"} />
      <View style={styles.financeContainer}>
        <FinanceResources title={"Current Balance"} amount={"$16,200"} />
        <Pressable onPress={() => navigateTo("CurrentCash")}>
          <FinanceResources
            libIcon={MaterialCommunityIcons}
            iconName={"cash"}
            title={"Cash"}
            amount={"$3000"}
          />
        </Pressable>

        <Pressable onPress={() => navigateTo("CurrentBankAccount")}>
          <FinanceResources
            libIcon={MaterialCommunityIcons}
            iconName={"bank"}
            title={"Bank"}
            amount={"$5000"}
          />
        </Pressable>
        <Pressable onPress={() => navigateTo("CurrentEWallet")}>
          <FinanceResources
            libIcon={Ionicons}
            iconName={"wallet-outline"}
            title={"E-Wallet"}
            amount={"$100"}
          />
        </Pressable>
      </View>
      <TouchableWithoutFeedback onPress={handleVisibleModal}>
        <View style={styles.addWidget}>
          <AntDesign name="plus" size={SIZES.medium} color={"black"} />
          <Text
            style={{
              paddingLeft: 10,
              fontSize: SIZES.tiny,
              fontFamily: FONTFAMILIES.medium,
            }}
          >
            Add new account
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal isVisible={isVisible}>
        <View style={styles.modal}>
          <Text style={styles.title}>Add new resource</Text>

          <View
            style={styles.inputWrapper}
          >
            <TextInput style={styles.input} placeholder="Name resource"/>
            <TextInput style={styles.input} placeholder="Current balance" />
          </View>

          <Button 
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Save
            </Text>
          </Button>
          
          <Button onPress={handleClose} className={{ backgroundColor: COLORS.gray3 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Hủy
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};
export default Finances;
