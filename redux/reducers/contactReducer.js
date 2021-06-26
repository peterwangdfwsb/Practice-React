const initialState = [
    { id: 0, firstname: "Peter", lastname:"Pan", sex: "Female", age: "30", password: "aaa", repeat: "aaa"},
    { id: 1, firstname: "Jack", lastname:"Joe", sex: "Female", age: "88", password: "aaa", repeat: "aaa" },
    { id: 2, firstname: "Jack", lastname:"Jones", sex: "Male", age: "28", password: "aaa", repeat: "aaa" },
    { id: 3, firstname: "Kevin", lastname:"Durant", sex: "Male", age: "30", password: "aaa", repeat: "aaa" },
    { id: 4, firstname: "Jeff", lastname:"Teague", sex: "Male", age: "35", password: "aaa", repeat: "aaa" },
    { id: 5, firstname: "Jrue", lastname:"Holiday", sex: "Male", age: "40", password: "aaa", repeat: "aaa" },
    { id: 6, firstname: "Seth", lastname:"Curry", sex: "Male", age: "27", password: "aaa", repeat: "aaa" },
    { id: 7, firstname: "Ben", lastname:"Simmons", sex: "Male", age: "39", password: "aaa", repeat: "aaa" },
    { id: 8, firstname: "Dwight", lastname:"Howard", sex: "Male", age: "14", password: "aaa", repeat: "aaa" },
    { id: 9, firstname: "Trae", lastname:"Young", sex: "Male", age: "77", password: "aaa", repeat: "aaa" },
    { id: 10, firstname: "Kevin", lastname:"Huerter", sex: "Male", age: "67", password: "aaa", repeat: "aaa" },
    { id: 11, firstname: "Lou", lastname:"Williams", sex: "Male", age: "84", password: "aaa", repeat: "aaa" }

  ];
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;

      case "UPDATE_CONTACT":
        let newItem = [...state];
        let contactUpdate = newItem.filter((contact) =>
        parseInt(contact.id) === parseInt(action.payload.id)
        ? Object.assign(contact, action.payload)
        : contact
        );
        state = contactUpdate;
        return state;

      case "RESET_CONTACT":
        state = [{ id: null, firstname: null, lastname: null, sex: null, age: null, password: null, repeat: null }];
        return state;

      default:
        return state;
    }
  };