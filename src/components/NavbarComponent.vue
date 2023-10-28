<template>
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Heuristicas App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- <li class="nav-item">
                        <RouterLink to="checklist"><a class="nav-link active" aria-current="page">Checklist</a></RouterLink>
                        
                    </li> -->
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/pruebasheuristicas">Pruebas Heuristicas
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/pruebadiseno">Pruebas Diseño</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>