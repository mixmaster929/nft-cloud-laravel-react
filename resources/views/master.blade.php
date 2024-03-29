<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <!--     Fonts and icons     -->
    @if (Request::is('admin/*') == 1)
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <!-- Nucleo Icons -->
    <link href="/css/nucleo-icons.css" rel="stylesheet" />
    <link href="/css/nucleo-svg.css" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <link href="/css/nucleo-svg.css" rel="stylesheet" />
    <!-- CSS Files -->
    <link id="pagestyle" href="/css/argon-dashboard.css?v=2.0.0" rel="stylesheet" />
    @else
    <!-- CSS Files ================================================== -->
    <link href="/frontend/css/plugins.css" rel="stylesheet" type="text/css" />    
    <link href="/frontend/css/style.css" rel="stylesheet" type="text/css" />
    <!-- color scheme -->
    <link id="colors" href="/frontend/css/colors/scheme-02.css" rel="stylesheet" type="text/css" />
    <link href="/frontend/css/coloring.css" rel="stylesheet" type="text/css" />
    @endif
    <link rel="icon" href="/img/logo-1.png" />
    <title>NFT Marketplace Website Template</title>
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>
  @if (Request::is('admin/*') == 1)
  <body class="g-sidenav-show   bg-gray-100">
  @else
  <body class="dark-scheme">
  @endif
    @inertia
    @if (Request::is('admin/*') != 1)
    <!-- Javascript Files ================================================== -->
    <script src="/frontend/js/plugins.js" defer></script>
    <script src="/frontend/js/designesia.js" defer></script>
    @else
    <!--   Core JS Files   -->
    <script src="/js/core/popper.min.js"></script>
    <script src="/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="/js/plugins/smooth-scrollbar.min.js"></script>
    
    <!-- Github buttons -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
    <script src="/js/argon-dashboard.min.js?v=2.0.0"></script>
    <script>
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
      var win = navigator.platform.indexOf('Win') > -1;
      if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
          damping: '0.5'
        }
        Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
      }
    </script>
    @endif
  </body>
</html>