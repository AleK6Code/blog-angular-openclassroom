# BlogAngularOpenclassroom

Exercice Angular sur **openClassroom**

 En termes de structure :

    *votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent → __OK__
    *votre PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu → OK
    *chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template → OK
    *les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent → OK
    *Quand un post a plus de "love it" que de "don't love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts < 0, il sera coloré en rouge. → OK
