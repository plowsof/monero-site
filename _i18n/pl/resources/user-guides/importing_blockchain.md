{% include disclaimer.html translated="no" translationOutdated="no" %}

### Cel i Ostrzeżenie

Większość ludzi tego nie potrzebuje. Aby korzystać z Monero, wystarczy
uruchomić oprogramowanie, a ono samo zsynchronizuje się z siecią
peer-to-peer. Zazwyczaj jest to znacznie szybsze niż pobieranie i
importowanie blockchaina, jak wyszczególniono w tym przewodniku. Dzieje się
tak dlatego, że będziesz pobierać z wielu serwerów peer-to-peer zamiast z
jednego, a Monero @daemon zweryfikuje każdy blok w momencie jego otrzymania,
zamiast weryfikować go osobno po pobraniu.

Ta opcja jest przydatna głównie podczas programowania, lub jeśli jakiś
nietypowy problem uniemożliwia synchronizację w normalny sposób.

**Nigdy** nie używaj niebezpiecznej opcji niezweryfikowanego importu, jest ona przeznaczona wyłącznie dla ekspertów. W szczególności nie używaj jej z żadnym blockchainem, który pobierasz z Internetu, w tym z oficjalnej strony. Jest ona bezpieczna tylko wtedy, gdy a) importujesz plik, który sam wyeksportowałeś lokalnie *i* b) jesteś absolutnie pewien, że został on już w pełni i prawidłowo zweryfikowany przed eksportem.

### Krok 1

Pobierz aktualny bootstrap z https://downloads.getmonero.org/blockchain.raw;
możesz pominąć ten krok, jeśli importujesz blockchain z innego źródła.

### Krok 2

Znajdź ścieżkę, gdzie zainstalowane jest oprogramowanie Monero. Na przykład
moja to:

`D:\monero-gui-0.10.3.1`

Twoja ścieżka może być inna w zależności od tego, gdzie zdecydowałeś się
zainstalować oprogramowanie Monero i jaką wersję oprogramowania posiadasz.

### Krok 3

Znajdź ścieżkę do swojego pobranego blockchaina, na przykład moją była:

`C:\Users\KeeJef\Downloads\blockchain.raw`

Twoja może być inna w zależności od tego, gdzie zdecydowałeś się zapisać
pobrany blockchain.

### Krok 4

Otwórz okno Wiersza Poleceń. Możesz to zrobić naciskając klawisz Windows +
R, a następnie wpisując w oknie, które wyskoczy - `CMD` i nacisnąć Enter.

### Krok 5

Teraz musisz wejść za pomocą okna CMD do miejsca gdzie znajduję się
zainstalowane oprogramowanie Monero. Możesz to zrobić wpisując:

`cd C:\TUTAJ\TWOJA\ŚCIEŻKA\MONERO`

Powinno to wyglądać mniej więcej tak:

`cd D:\monero-gui-0.10.3.1`

Jeśli Twoje oprogramowanie Monero jest na innym dysku możesz użyć
`LiteraDysku:` na przykład jeśli Twoje oprogramowanie Monero było na dysku D
to przed użyciem komendy `cd` napisałbyś `D:`.

### Krok 6

Teraz wpisz w oknie wiersza poleceń:

`monero-blockchain-import --input-file C:\TUTAJ\TWOJA\ŚCIEŻKA\DO\BLOCKCHAIN`

Na przykład ja wpisałbym:

`monero-blockchain-import --input-file
C:\Users\KeeJef\Downloads\blockchain.raw`

### Krok 7

After the blockchain has finished syncing up you can open your Monero wallet
normally. Your downloaded blockchain.raw can be deleted.
