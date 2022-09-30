import { Route, Switch } from "react-router-dom"
import * as routes from "../../constants/routes.constants"
import AccountsPage from "../Pages/AccountsPage"
import CardsPage from "../Pages/CardsPage"
import ProfilePage from "../Pages/ProfilePage"
import TransactionPage from "../Pages/TransactionsPage"
import UserManagementPage from "../Pages/UserManagementPage"

export const AdminRoute = () => {

    return (
        <Switch>
            <Route path={routes.USER_ACCOUNTS_URI} component={AccountsPage} />
            <Route path={routes.USER_CARDS_URI} component={CardsPage} />
            <Route path={routes.USER_TRANSACTIONS_URI} component={TransactionPage} />
            <Route path={routes.USER_PROFILE_URI} component={ProfilePage} />
        </Switch>
    )
}

export const UserRoute = () => {

    return (
        <Switch>
            <Route path={routes.ADMIN_USERS_URI} component={UserManagementPage} />
            <Route path={routes.ADMIN_PROFILE_URI} component={ProfilePage} />
        </Switch>
    )
}