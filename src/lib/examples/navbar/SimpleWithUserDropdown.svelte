<div class="navbar justify-between items-center bg-base-300">
    <!-- Logo -->
    <img alt="DaisyCatalog" src="/logo.svg" class="w-12" />

    <div class="dropdown dropdown-bottom dropdown-end">
        <!-- Dropdown action -->
        <button class="btn btn-link p-0">
            <img alt="User" src="/user.png" class="w-10 hover:brightness-90" />
        </button>

        <!-- Dropdown content -->
        <ul
            class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
        >
            <!-- User name and email -->
            <div class="flex flex-col cap-2 p-2 border-b border-b-neutral">
                <span class="text-xl font-bold line-clamp-1 break-all">
                    Some guy with long name
                </span>

                <span class="text-sm text-secondary line-clamp-1 break-all">
                    some.guy@with.very.long.email
                </span>
            </div>

            <!-- Menu items -->

            <li>
                <a href="/">
                    <i class="fa-solid fa-user"></i>
                    Profile
                </a>
            </li>

            <li>
                <a href="/">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    Logout
                </a>
            </li>
        </ul>
    </div>
</div>
