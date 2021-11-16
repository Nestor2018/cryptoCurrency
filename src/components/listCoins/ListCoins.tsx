import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

import CoinItem from './CoinItem';
import CoinSearch from '../coinSearch/CoinSearch';
import Loader from '../loader/Loader';
import {get} from '../../api/coins';
import colors from '../../utils/colors';
import {Icoin} from '../../interfaces/coin.interface';

/**
 component ListCoins (lista de los coins)
  @param {any} navigation 
*/

const ListCoins = ({navigation}: any) => {
  const [coins, setCoins] = useState<Array<Icoin>>([]);
  const [allCoins, setAllCoins] = useState<Array<Icoin>>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      await loadCoins();
    })();
  }, []);

  /**
  Hace una peticion get para traer los coins
  */
  const loadCoins = async () => {
    try {
      setLoading(true);
      const response = await get('/tickers');
      setCoins(response.data);
      setAllCoins(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  /**
  Recibi el texto ingresado al input para hacer un filtro en el arreglo de coins
  @param {string} query
  */
  const handleSearch = (query: string) => {
    const coinsFiltered = allCoins.filter((coin: Icoin) => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    setCoins(coinsFiltered);
  };

  /**
  Redirecciona a la pantalla de CoinDetail y se envia el coin para que sea rederizado
  @param {object} coin 
  */
  const handlePress = (coin: Icoin) => {
    navigation.navigate('CoinDetail', {coin});
  };

  const renderItem = ({item}: {item: Icoin}) => (
    <CoinItem coin={item} onPress={() => handlePress(item)} />
  );

  return (
    <SafeAreaView style={styles.container} testID="listCoins">
      <CoinSearch onChange={handleSearch} />
      {loading ? <Loader /> : null}
      <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={allCoins}
        initialNumToRender={13}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
});

export default ListCoins;
