<template>
  <div>
    <NuxtRouteAnnouncer />
    <form action="/transactions/get" method="POST">
      <label for="clientID">Client ID:</label>
      <input type="text" id="clientID" name="clientID"><br><br>
      <label for="secretID">Secret ID:</label>
      <input type="text" id="secretID" name="secretID"><br><br>
      <label for="atoken">Acess Token:</label>
      <input type="text" id="atoken" name="atoken"><br><br>
      <input type="submit" value="Submit">
    </form> 
  </div>
</template>
