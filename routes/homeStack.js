import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Todo from "../screens/Todo";
import ReviewDetails from "../screens/reviewDetails";
import TodoItem from "../components/todoItem";


const screens ={
    
Todo:{
    screen:Todo,
    navigationOption:{
        headertitle:() => <Header/>
    }
},
ReviewDetails:{
    screen:ReviewDetails,
    navigationOption:{
        title:"Todo Details"
    }
}

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'skyblue',height:90,}
    }
});

export default createAppContainer(HomeStack);