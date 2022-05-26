<?php
// This is the ACCOUNTS model
//site registration handling
function regClient($clientFirstname, $clientLastname, $clientEmail, $clientPassword)
{
  //base connect
  $base = phpmotorsConnect();
  //sql
  $sql = 'INSERT into clients (clientFirstname, clientLastname, clientEmail, clientPassword)
    VALUES (:clientFirstname, clientLastname, clientEmail, clientPassword)';
  //prepare
  $statement = $base->prepare($sql);
  //replace values with real data
  $statement->bindValue(':clientFirstname', $clientFirstname, PDO::PARAM_STR);
  $statement->bindValue(':clientLastname', $clientLastname, PDO::PARAM_STR);
  $statement->bindValue(':clientEmail', $clientEmail, PDO::PARAM_STR);
  $statement->bindValue(':clientPassword', $clientPassword, PDO::PARAM_STR);
  //insert the data
  $statement->execute();
  //how many rows changed
  $rowsChanged = $statement->rowCount();
  //close base
  $statement->closeCursor();
  //return rows changed to show success
  return $rowsChanged;
}
?>