<template>
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
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

                        <RouterLink to="/pruebasheuristicas"><a class="nav-link">PropietariosPruebas</a></RouterLink>
                    </li>
                    <li class="nav-item">

                        <RouterLink to="/heuristicproblems"><a class="nav-link">Evaluacion</a></RouterLink>

                    </li>
                    <li class="nav-item">
                        <RouterLink to="/heuristicevaluation"><a class="nav-link">Evaluacion2</a></RouterLink>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>