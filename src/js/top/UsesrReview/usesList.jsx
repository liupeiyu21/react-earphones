import React from "react";
import UsersCard from "./usersCard";

const UsersList = ({ items}) => {

    return(
        <div className="users-list">
            {items.map(( item, index ) => (
                <UsersCard key={index} item={ item} />
            ))}
        </div>
    )
};

export default UsersList;