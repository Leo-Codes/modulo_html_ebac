$(document).ready(function(){

    const display_elements = {
        profile_name : $('.profile-name'),
        profile_username : $('.profile-username'),
        repos : $('#repos'),
        followers: $('#followers'),
        following: $('#following'),
        avatar: $('.profile-avatar'),
        page_btn: $('.profile-link')
    }

    $.ajax({
        url: "https://api.github.com/users/leonardo-marinhoo",
        type: "GET"
    })
    .done((response)=>{
        display_elements.profile_name.html(response.name);
        display_elements.profile_username.html(response.login);
        display_elements.repos.html(response.public_repos);
        display_elements.followers.html(response.followers);
        display_elements.following.html(response.following);
        display_elements.avatar.attr("src", response.avatar_url);
        display_elements.page_btn.attr("href", response.html_url);
    })


})