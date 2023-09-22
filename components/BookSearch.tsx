import {
  ScrollView,
  View,
  Text,
  Button,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { searchByTitleOrAuthor } from "../google-books-calls";
import { styles } from "../stylesheet";

type BookProps = {
  title: string;
  authors: string;
  description: string;
  coverImg: string;
  averageRating: number;
};

type SearchBarComponentProps = { callbackFn: Function };

const BookSearch: React.FC<SearchBarComponentProps> = ({ callbackFn }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const updateSearch = (searchTerm: string) => {
    if (searchTerm === "") {
      setSearch("");
      setSearchResults([]);
    } else if (searchTerm) {
      setSearch(searchTerm);
      searchByTitleOrAuthor(search, setSearchResults);
    }
  };

  console.log(search);
  console.log(searchResults);

  return (
    <View>
      <SearchBar
        placeholder="Search by title or author..."
        onChangeText={updateSearch}
        value={search}
        platform="ios"
        clearIcon={false}
      />
      {search ? (
        <View style={styles.searchResultsContainer}>
          <ScrollView>
            {searchResults.map((book: BookProps) => {
              return (
                <View style={styles.searchResults}>
                  <Image
                    source={{ uri: book.coverImg }}
                    style={{ width: 66, height: 100 }}
                  />
                  <View style={styles.searchResultText}>
                    <Text>{book.title}</Text>
                    <Text>{book.authors}</Text>
                  </View>
                  <View style={styles.searchAddBookButton}>
                    <Button title="Add book" onPress={() => callbackFn(book)} />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default BookSearch;
