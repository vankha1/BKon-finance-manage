import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useEffect, useMemo, useState } from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

import FinanceResources from "@/components/FinanceResource/FinanceResources";
import { SIZES, FONTFAMILIES, COLORS } from "@/constants";
import Header from "@/components/Header/Header";
import styles from "./styles";
import Button from "@/components/Button/Button";
import { getResources, createResource } from "@/services";

const Finances = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [resourceName, setResourceName] = useState("");
  const [balance, setBalance] = useState("");
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const currentBalance = useMemo(
    () => resources.reduce((acc, ele) => acc + ele.balance, 0),
    [resources]
  );

  const navigator = useNavigation();

  const handleVisibleModal = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getResources();
      // console.log(response)
      setResources(response);
    };
    getData();
  }, []);

  const RenderResourceItem = ({
    title,
    amount,
    component,
    navigateOptions,
  }) => {
    return (
      <Pressable onPress={() => navigator.navigate(component, navigateOptions)}>
        <FinanceResources
          libIcon={MaterialCommunityIcons}
          iconName={"cash"}
          title={title}
          amount={amount}
        />
      </Pressable>
    );
  };

  const handleSave = async () => {
    setIsLoading(true);

    const response = await createResource(resourceName, balance);
    setResources([...resources, response]);

    setIsLoading(false);

    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Header title={"Finance Resources"} />
          <View style={styles.financeContainer}>
            <FinanceResources
              title={"Current Balance"}
              amount={currentBalance}
            />
            <FlatList
              data={resources}
              renderItem={({ item }) => (
                <RenderResourceItem
                  title={item.name}
                  amount={item.balance}
                  component={"CurrentCash"}
                  navigateOptions={{
                    name: item.name,
                    amount: item.balance,
                    id: item._id,
                  }}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
        </>
      )}
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

          <View style={styles.inputWrapper}>
            <TextInput
              value={resourceName}
              onChangeText={setResourceName}
              style={styles.input}
              placeholder="Name resource"
            />
            <TextInput
              keyboardType="numeric"
              value={balance}
              onChangeText={setBalance}
              style={styles.input}
              placeholder="Current balance"
            />
          </View>

          <Button onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </Button>

          <Button
            onPress={handleClose}
            className={{ backgroundColor: COLORS.gray3 }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};
export default Finances;
