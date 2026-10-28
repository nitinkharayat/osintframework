/* Open-source-first directory dataset. Check the upstream license before use or redistribution. */
window.categories = [
  {
    "name": "Reconnaissance",
    "color": "#53694a",
    "icon": "radar",
    "description": "Map public-facing assets, domains, identities, and infrastructure."
  },
  {
    "name": "Scanning & Enumeration",
    "color": "#567886",
    "icon": "scan",
    "description": "Inventory hosts, services, and common security weaknesses in scope."
  },
  {
    "name": "Web Exploitation & Testing",
    "color": "#9c665f",
    "icon": "bug",
    "description": "Test web applications and validate findings in authorized environments."
  },
  {
    "name": "Cryptography & Hashing",
    "color": "#486b4a",
    "icon": "key-round",
    "description": "Inspect encodings, certificates, hashes, and authentication strength."
  },
  {
    "name": "Network & Packet Analysis",
    "color": "#66708f",
    "icon": "activity",
    "description": "Decode traffic, inspect protocols, and monitor network behavior."
  },
  {
    "name": "Forensics & Log Analysis",
    "color": "#a56535",
    "icon": "file-search",
    "description": "Examine evidence, memory artifacts, and event data."
  },
  {
    "name": "OSINT Frameworks & Aggregators",
    "color": "#88753d",
    "icon": "network",
    "description": "Bring investigation resources and threat intelligence together."
  },
  {
    "name": "Productivity & Utilities",
    "color": "#676d67",
    "icon": "terminal",
    "description": "Support repeatable workflows with practical command-line and web utilities."
  }
];

window.toolsDatabase = [
  {
    "id": "amass",
    "name": "OWASP Amass",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "An open-source framework for mapping attack surfaces and discovering external assets through DNS and related techniques.",
    "purpose": "OWASP Amass helps defenders map domains and related infrastructure into an evidence-led external asset inventory. Begin with passive collection where appropriate, record scope and timestamps, and validate results before treating them as confirmed assets.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/owasp-amass/amass",
    "github": "https://github.com/owasp-amass/amass",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install amass\namass -version",
      "arch": "sudo pacman -S amass\namass -version",
      "mac": "brew install amass\namass -version"
    },
    "docs": "https://owasp-amass.github.io/amass/",
    "related": [],
    "command": "amass enum -passive -d example.com",
    "commandNote": "Passive domain enumeration example. Replace example.com only with a domain you are authorized to research.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "theharvester",
    "name": "theHarvester",
    "category": "Reconnaissance",
    "subcategory": "Email & Username Finder",
    "description": "Collects publicly available names, email addresses, hosts, and related domain intelligence from supported sources.",
    "purpose": "Collects publicly available names, email addresses, hosts, and related domain intelligence from supported sources. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/laramies/theHarvester",
    "github": "https://github.com/laramies/theHarvester",
    "benefits": [
      "Build a structured picture of public-facing assets",
      "Pivot between related public data points",
      "Support evidence-led, scoped research"
    ],
    "useCases": [
      "Research public professional contact footprints",
      "Correlate public identifiers with consent and a defined purpose",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install theharvester\ntheharvester --version",
      "arch": "sudo pacman -Syu theharvester\ntheharvester --version",
      "mac": "brew install theharvester\ntheharvester --version"
    },
    "docs": "https://github.com/laramies/theHarvester",
    "related": [
      "Shodan",
      "Recon-ng",
      "SpiderFoot",
      "Maltego (Community Edition)"
    ],
    "command": "theHarvester -d example.com -b crtsh",
    "commandNote": "Collects public domain-related results from a supported source. Use only an in-scope domain.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "recon-ng",
    "name": "Recon-ng",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "A modular reconnaissance framework for organizing and automating open-source information gathering.",
    "purpose": "A modular reconnaissance framework for organizing and automating open-source information gathering. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/lanmaster53/recon-ng",
    "github": "https://github.com/lanmaster53/recon-ng",
    "benefits": [
      "Build a structured picture of public-facing assets",
      "Pivot between related public data points",
      "Support evidence-led, scoped research"
    ],
    "useCases": [
      "Review DNS records for an owned domain",
      "Document domain registration and name-server changes",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install recon-ng\nrecon-ng --version",
      "arch": "sudo pacman -Syu recon-ng\nrecon-ng --version",
      "mac": "brew install recon-ng\nrecon-ng --version"
    },
    "docs": "https://github.com/lanmaster53/recon-ng",
    "related": [
      "Shodan",
      "theHarvester",
      "SpiderFoot",
      "Maltego (Community Edition)"
    ],
    "command": "recon-ng --help",
    "commandNote": "Start with the help screen, then configure modules and workspace scope deliberately.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "spiderfoot",
    "name": "SpiderFoot",
    "category": "Reconnaissance",
    "subcategory": "Website & Server Profiling",
    "description": "Automates OSINT collection from a target domain, IP address, hostname, or other public identifier.",
    "purpose": "Automates OSINT collection from a target domain, IP address, hostname, or other public identifier. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations. The self-hosted community edition is open source; hosted or commercial offerings may differ.",
    "difficulty": "Intermediate",
    "price": "Open-source community edition",
    "trustScore": 90,
    "platforms": [
      "Web",
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.spiderfoot.net/",
    "github": "https://github.com/smicallef/spiderfoot",
    "benefits": [
      "Build a structured picture of public-facing assets",
      "Pivot between related public data points",
      "Support evidence-led, scoped research"
    ],
    "useCases": [
      "Inventory technologies on owned websites",
      "Document public-facing application components",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install spiderfoot\nspiderfoot --version",
      "arch": "sudo pacman -Syu spiderfoot\nspiderfoot --version",
      "mac": "brew install spiderfoot\nspiderfoot --version"
    },
    "docs": "https://www.spiderfoot.net/",
    "related": [
      "Shodan",
      "theHarvester",
      "Recon-ng",
      "Maltego (Community Edition)"
    ],
    "command": "python3 sf.py -h",
    "commandNote": "Displays options for the self-hosted SpiderFoot instance.",
    "licenseNote": "The self-hosted community edition is open source; hosted or commercial offerings may have separate terms. Check the exact edition and license before deployment."
  },
  {
    "id": "subfinder",
    "name": "Subfinder",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "A fast passive subdomain discovery tool that queries supported public sources.",
    "purpose": "Subfinder collects subdomain names from supported public sources. Use it to seed an owned-asset inventory, then deduplicate and verify findings against DNS and your own records.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/projectdiscovery/subfinder",
    "github": "https://github.com/projectdiscovery/subfinder",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest",
      "arch": "go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest",
      "mac": "brew install subfinder"
    },
    "docs": "https://docs.projectdiscovery.io/opensource/subfinder/overview",
    "related": [],
    "command": "subfinder -d example.com -silent",
    "commandNote": "Passive source-based discovery. Use a domain that is within your authorized scope.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "whois",
    "name": "WHOIS (CLI)",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "A command-line client for querying public domain registration records where registry data is available.",
    "purpose": "WHOIS queries help collect registrar, status, and date fields that may be published by a registry. Privacy services and registry policies can limit returned information, so treat results as partial evidence rather than identity proof.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/rfc1036/whois",
    "github": "https://github.com/rfc1036/whois",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt install whois\nwhois --help",
      "arch": "sudo pacman -S whois\nwhois --help",
      "mac": "brew install whois"
    },
    "docs": "https://manpages.debian.org/stable/whois/whois.1.en.html",
    "related": [],
    "command": "whois example.com",
    "commandNote": "Queries public registration data for the example domain.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "nslookup",
    "name": "nslookup",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "A command-line utility for querying DNS records and troubleshooting name resolution.",
    "purpose": "A command-line utility for querying DNS records and troubleshooting name resolution. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 86,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.isc.org/bind/",
    "github": "https://gitlab.isc.org/isc-projects/bind9",
    "benefits": [
      "Build a structured picture of public-facing assets",
      "Pivot between related public data points",
      "Support evidence-led, scoped research"
    ],
    "useCases": [
      "Review DNS records for an owned domain",
      "Document domain registration and name-server changes",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install dnsutils\ndnsutils --version",
      "arch": "sudo pacman -Syu dnsutils\ndnsutils --version",
      "mac": "brew install dnsutils\ndnsutils --version"
    },
    "docs": "https://www.isc.org/bind/",
    "related": [
      "Shodan",
      "theHarvester",
      "Recon-ng",
      "SpiderFoot"
    ],
    "command": "nslookup example.com",
    "commandNote": "Queries a public DNS name.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "dig",
    "name": "dig",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "A flexible DNS lookup utility for inspecting record sets, name servers, and DNS responses.",
    "purpose": "A flexible DNS lookup utility for inspecting record sets, name servers, and DNS responses. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 86,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://bind9.readthedocs.io/",
    "github": "https://gitlab.isc.org/isc-projects/bind9",
    "benefits": [
      "Build a structured picture of public-facing assets",
      "Pivot between related public data points",
      "Support evidence-led, scoped research"
    ],
    "useCases": [
      "Review DNS records for an owned domain",
      "Document domain registration and name-server changes",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install dnsutils\ndnsutils --version",
      "arch": "sudo pacman -Syu dnsutils\ndnsutils --version",
      "mac": "brew install dnsutils\ndnsutils --version"
    },
    "docs": "https://bind9.readthedocs.io/",
    "related": [
      "Shodan",
      "theHarvester",
      "Recon-ng",
      "SpiderFoot"
    ],
    "command": "dig example.com A +short",
    "commandNote": "Looks up A records for the sample domain.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "sherlock",
    "name": "Sherlock",
    "category": "Reconnaissance",
    "subcategory": "Email & Username Finder",
    "description": "Finds public profile matches for a username across many websites.",
    "purpose": "Sherlock automates checks for public username-profile URLs. A match is only a lead: names can be reused and results should be independently verified before attribution.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/sherlock-project/sherlock",
    "github": "https://github.com/sherlock-project/sherlock",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "python3 -m pip install sherlock-project\nsherlock --help",
      "arch": "python -m pip install sherlock-project\nsherlock --help",
      "mac": "python3 -m pip install sherlock-project\nsherlock --help"
    },
    "docs": "https://github.com/sherlock-project/sherlock#readme",
    "related": [],
    "command": "sherlock --help",
    "commandNote": "Start with the help screen. Only investigate usernames for a legitimate, clearly defined purpose.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "maigret",
    "name": "Maigret",
    "category": "Reconnaissance",
    "subcategory": "Email & Username Finder",
    "description": "An open-source username investigation tool that checks public site profiles and reports possible matches.",
    "purpose": "Maigret automates public-profile checks for a supplied username. Treat possible matches as unverified leads, avoid invasive use, and document the source and confidence for each conclusion.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/soxoj/maigret",
    "github": "https://github.com/soxoj/maigret",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "python3 -m pip install maigret\nmaigret --help",
      "arch": "python -m pip install maigret\nmaigret --help",
      "mac": "python3 -m pip install maigret\nmaigret --help"
    },
    "docs": "https://maigret.readthedocs.io/",
    "related": [],
    "command": "maigret --help",
    "commandNote": "Review available options before running checks. Do not infer identity from a username match alone.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "dnsx",
    "name": "dnsx",
    "category": "Reconnaissance",
    "subcategory": "Domain & DNS Enumeration",
    "description": "A fast DNS toolkit for resolving and validating domain names from a supplied list.",
    "purpose": "dnsx helps verify DNS records and resolve known names. It is useful after passive asset discovery to reduce stale or invalid results and create a reproducible inventory.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/projectdiscovery/dnsx",
    "github": "https://github.com/projectdiscovery/dnsx",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "go install -v github.com/projectdiscovery/dnsx/cmd/dnsx@latest\ndnsx -h",
      "arch": "go install -v github.com/projectdiscovery/dnsx/cmd/dnsx@latest\ndnsx -h",
      "mac": "brew install dnsx"
    },
    "docs": "https://docs.projectdiscovery.io/opensource/dnsx/overview",
    "related": [],
    "command": "printf \"example.com\\n\" | dnsx -a -resp-only",
    "commandNote": "Resolves a sample domain. Use only names relevant to an authorized asset inventory.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "httpx",
    "name": "httpx",
    "category": "Reconnaissance",
    "subcategory": "Website & Server Profiling",
    "description": "A web probing toolkit that collects HTTP response details for known, in-scope hosts.",
    "purpose": "ProjectDiscovery httpx helps validate web hosts and collect response metadata such as status, title, and technology hints. Use it against an explicitly scoped list and keep request rates reasonable.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/projectdiscovery/httpx",
    "github": "https://github.com/projectdiscovery/httpx",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest\nhttpx -h",
      "arch": "go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest\nhttpx -h",
      "mac": "brew install httpx"
    },
    "docs": "https://docs.projectdiscovery.io/opensource/httpx/overview",
    "related": [],
    "command": "printf \"http://127.0.0.1:3000\\n\" | httpx -title -status-code",
    "commandNote": "Example targets a local development service only.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "nmap",
    "name": "Nmap",
    "category": "Scanning & Enumeration",
    "subcategory": "Network Scanning",
    "description": "Discovers hosts and services on networks and helps characterize systems within an authorized scope.",
    "purpose": "Discovers hosts and services on networks and helps characterize systems within an authorized scope. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://nmap.org/",
    "github": "https://github.com/nmap/nmap",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Inventory devices on an approved internal subnet",
      "Verify expected hosts in a lab network",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install nmap\nnmap --version",
      "arch": "sudo pacman -Syu nmap\nnmap --version",
      "mac": "brew install nmap\nnmap --version"
    },
    "docs": "https://nmap.org/",
    "related": [
      "Masscan",
      "ZMap",
      "Angry IP Scanner",
      "Nessus Essentials"
    ],
    "command": "nmap -sV 127.0.0.1",
    "commandNote": "Checks services on the local machine only.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "masscan",
    "name": "Masscan",
    "category": "Scanning & Enumeration",
    "subcategory": "Port Scanning",
    "description": "A high-speed TCP port scanner designed for broad, carefully scoped network measurement.",
    "purpose": "A high-speed TCP port scanner designed for broad, carefully scoped network measurement. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/robertdavidgraham/masscan",
    "github": "https://github.com/robertdavidgraham/masscan",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Measure service exposure on a lab or owned range",
      "Validate network segmentation after a change",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install masscan\nmasscan --version",
      "arch": "sudo pacman -Syu masscan\nmasscan --version",
      "mac": "brew install masscan\nmasscan --version"
    },
    "docs": "https://github.com/robertdavidgraham/masscan",
    "related": [
      "Nmap",
      "ZMap",
      "Angry IP Scanner",
      "Nessus Essentials"
    ],
    "command": "masscan 127.0.0.1 -p80,443 --rate 100",
    "commandNote": "Illustrative local-only port check; keep rate conservative.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "zmap",
    "name": "ZMap",
    "category": "Scanning & Enumeration",
    "subcategory": "Port Scanning",
    "description": "An open-source network scanner for large-scale measurement and research on authorized address ranges.",
    "purpose": "An open-source network scanner for large-scale measurement and research on authorized address ranges. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://zmap.io/",
    "github": "https://github.com/zmap/zmap",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Measure service exposure on a lab or owned range",
      "Validate network segmentation after a change",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install zmap\nzmap --version",
      "arch": "sudo pacman -Syu zmap\nzmap --version",
      "mac": "brew install zmap\nzmap --version"
    },
    "docs": "https://zmap.io/",
    "related": [
      "Nmap",
      "Masscan",
      "Angry IP Scanner",
      "Nessus Essentials"
    ],
    "command": "zmap --help",
    "commandNote": "Review target/rate configuration before use; scanning public ranges requires authorization.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "angry-ip-scanner",
    "name": "Angry IP Scanner",
    "category": "Scanning & Enumeration",
    "subcategory": "Network Scanning",
    "description": "A cross-platform graphical scanner that discovers hosts and gathers basic network information.",
    "purpose": "A cross-platform graphical scanner that discovers hosts and gathers basic network information. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://angryip.org/",
    "github": "https://github.com/angryip/ipscan",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Inventory devices on an approved internal subnet",
      "Verify expected hosts in a lab network",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install ipscan\nipscan --version",
      "arch": "sudo pacman -Syu ipscan\nipscan --version",
      "mac": "brew install ipscan\nipscan --version"
    },
    "docs": "https://angryip.org/",
    "related": [
      "Nmap",
      "Masscan",
      "ZMap",
      "Nessus Essentials"
    ],
    "command": "Open Angry IP Scanner → set target to 127.0.0.1 → Start",
    "commandNote": "Use the GUI against your own host or lab network.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "rustscan",
    "name": "RustScan",
    "category": "Scanning & Enumeration",
    "subcategory": "Port Scanning",
    "description": "A fast port-discovery front end that can pass discovered ports to Nmap for further inspection.",
    "purpose": "RustScan is useful for checking services on assets you administer. Keep the target list bounded, observe rate limits, and confirm each discovered service with a more detailed review.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/RustScan/RustScan",
    "github": "https://github.com/RustScan/RustScan",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "See official install options for your distribution, then run:\nrustscan --help",
      "arch": "sudo pacman -S rustscan\nrustscan --help",
      "mac": "brew install rustscan\nrustscan --help"
    },
    "docs": "https://github.com/RustScan/RustScan#readme",
    "related": [],
    "command": "rustscan -a 127.0.0.1 -- -sV",
    "commandNote": "Scans loopback only and passes detected ports to Nmap for service-version checks.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "greenbone-community-edition",
    "name": "Greenbone Community Edition",
    "category": "Scanning & Enumeration",
    "subcategory": "Vulnerability Scanning",
    "description": "A community vulnerability management platform for scanning and assessing systems in controlled environments.",
    "purpose": "A community vulnerability management platform for scanning and assessing systems in controlled environments. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://www.greenbone.net/en/community-edition/",
    "github": "https://github.com/greenbone",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Check owned systems against known vulnerability signatures",
      "Track remediation progress on an approved asset list",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://www.greenbone.net/en/community-edition/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://www.greenbone.net/en/community-edition/",
    "related": [
      "Nmap",
      "Masscan",
      "ZMap",
      "Angry IP Scanner"
    ],
    "command": "See the official Greenbone Community Edition setup guide",
    "commandNote": "Vulnerability scanner; scan only assets covered by written authorization.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "nuclei",
    "name": "Nuclei",
    "category": "Scanning & Enumeration",
    "subcategory": "Vulnerability Scanning",
    "description": "A template-driven scanner for checking known exposures and misconfigurations in explicitly scoped targets.",
    "purpose": "Nuclei matches targets against community and custom templates. Start with a local lab or a system you administer, review template behavior, and obtain permission before testing any other host.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/projectdiscovery/nuclei",
    "github": "https://github.com/projectdiscovery/nuclei",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest\nnuclei -h",
      "arch": "go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest\nnuclei -h",
      "mac": "brew install nuclei"
    },
    "docs": "https://docs.projectdiscovery.io/opensource/nuclei/overview",
    "related": [],
    "command": "nuclei -u http://127.0.0.1:3000 -severity info,low",
    "commandNote": "Example uses a local lab target. Review templates and authorization before scanning.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "naabu",
    "name": "Naabu",
    "category": "Scanning & Enumeration",
    "subcategory": "Port Scanning",
    "description": "A port scanner designed for asset discovery workflows with support for configurable ports and rates.",
    "purpose": "Naabu helps defenders identify reachable ports on in-scope hosts. Run it only against owned or explicitly authorized systems, and coordinate rates with the system owner.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/projectdiscovery/naabu",
    "github": "https://github.com/projectdiscovery/naabu",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "go install -v github.com/projectdiscovery/naabu/v2/cmd/naabu@latest\nnaabu -h",
      "arch": "go install -v github.com/projectdiscovery/naabu/v2/cmd/naabu@latest\nnaabu -h",
      "mac": "brew install naabu"
    },
    "docs": "https://docs.projectdiscovery.io/opensource/naabu/overview",
    "related": [],
    "command": "naabu -host 127.0.0.1 -top-ports 100",
    "commandNote": "Checks common ports on the local machine only.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "owasp-zap",
    "name": "OWASP ZAP",
    "category": "Scanning & Enumeration",
    "subcategory": "Web Crawling & Spidering",
    "description": "An open-source web application security testing tool with proxy, crawler, and passive scanning features.",
    "purpose": "An open-source web application security testing tool with proxy, crawler, and passive scanning features. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.zaproxy.org/",
    "github": "https://github.com/zaproxy/zaproxy",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Crawl a staging application before release",
      "Map application paths during an authorized review",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install zaproxy\nzaproxy --version",
      "arch": "sudo pacman -Syu zaproxy\nzaproxy --version",
      "mac": "brew install zaproxy\nzaproxy --version"
    },
    "docs": "https://www.zaproxy.org/",
    "related": [
      "Nmap",
      "Masscan",
      "ZMap",
      "Angry IP Scanner"
    ],
    "command": "Start ZAP → Quick Start → Manual Explore → http://127.0.0.1:3000",
    "commandNote": "Use a local test app to learn proxying and passive analysis first.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "nikto",
    "name": "Nikto",
    "category": "Scanning & Enumeration",
    "subcategory": "Vulnerability Scanning",
    "description": "A web server scanner that checks for known risky files, outdated software, and common configuration issues.",
    "purpose": "A web server scanner that checks for known risky files, outdated software, and common configuration issues. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/sullo/nikto",
    "github": "https://github.com/sullo/nikto",
    "benefits": [
      "Identify reachable assets and exposed services",
      "Make observations easier to validate and document",
      "Prioritize follow-up checks within an approved scope"
    ],
    "useCases": [
      "Check owned systems against known vulnerability signatures",
      "Track remediation progress on an approved asset list",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install nikto\nnikto --version",
      "arch": "sudo pacman -Syu nikto\nnikto --version",
      "mac": "brew install nikto\nnikto --version"
    },
    "docs": "https://github.com/sullo/nikto",
    "related": [
      "Nmap",
      "Masscan",
      "ZMap",
      "Angry IP Scanner"
    ],
    "command": "nikto -host http://127.0.0.1:3000",
    "commandNote": "Runs a basic check against a local test web server.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "katana",
    "name": "Katana",
    "category": "Web Exploitation & Testing",
    "subcategory": "Web Crawling & Spidering",
    "description": "A configurable web crawler for collecting URLs from websites in a defined scope.",
    "purpose": "Katana is useful for creating a route inventory of an application you own or have permission to assess. Use the local example first, exclude sensitive paths where needed, and keep crawl depth bounded.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/projectdiscovery/katana",
    "github": "https://github.com/projectdiscovery/katana",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "go install github.com/projectdiscovery/katana/cmd/katana@latest\nkatana -h",
      "arch": "go install github.com/projectdiscovery/katana/cmd/katana@latest\nkatana -h",
      "mac": "brew install katana"
    },
    "docs": "https://docs.projectdiscovery.io/opensource/katana/overview",
    "related": [],
    "command": "katana -u http://127.0.0.1:3000 -d 2",
    "commandNote": "Crawls a local web app with a shallow depth limit.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "sqlmap",
    "name": "sqlmap",
    "category": "Web Exploitation & Testing",
    "subcategory": "SQL Injection & XSS Testing",
    "description": "Automates detection and validation of SQL injection issues in systems where testing is explicitly authorized.",
    "purpose": "Automates detection and validation of SQL injection issues in systems where testing is explicitly authorized. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://sqlmap.org/",
    "github": "https://github.com/sqlmapproject/sqlmap",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Test input handling in a training application",
      "Verify that remediation prevents known test cases",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install sqlmap\nsqlmap --version",
      "arch": "sudo pacman -Syu sqlmap\nsqlmap --version",
      "mac": "brew install sqlmap\nsqlmap --version"
    },
    "docs": "https://sqlmap.org/",
    "related": [
      "Burp Suite Professional",
      "Wfuzz",
      "DirBuster",
      "Gobuster"
    ],
    "command": "sqlmap -u \"http://127.0.0.1:3000/item?id=1\" --batch --risk=1 --level=1",
    "commandNote": "Use only on a deliberately vulnerable local lab; this example is not for public targets.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "wfuzz",
    "name": "Wfuzz",
    "category": "Web Exploitation & Testing",
    "subcategory": "Fuzzing & Payload Generation",
    "description": "A web application fuzzer for testing parameters, paths, and responses in controlled test environments.",
    "purpose": "A web application fuzzer for testing parameters, paths, and responses in controlled test environments. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/xmendez/wfuzz",
    "github": "https://github.com/xmendez/wfuzz",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Test input validation using safe test data",
      "Discover unexpected responses in a local lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install wfuzz\nwfuzz --version",
      "arch": "sudo pacman -Syu wfuzz\nwfuzz --version",
      "mac": "brew install wfuzz\nwfuzz --version"
    },
    "docs": "https://github.com/xmendez/wfuzz",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "DirBuster",
      "Gobuster"
    ],
    "command": "wfuzz --help",
    "commandNote": "Review request and wordlist options before using against a lab application.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "dirsearch",
    "name": "dirsearch",
    "category": "Web Exploitation & Testing",
    "subcategory": "Web Crawling & Spidering",
    "description": "A web path discovery tool for authorized application testing and route inventory work.",
    "purpose": "dirsearch checks paths against a wordlist, which can generate significant requests. Use a local test app, a short wordlist, and explicit rate limits before using it in any approved assessment.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/maurosoria/dirsearch",
    "github": "https://github.com/maurosoria/dirsearch",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "python3 -m pip install dirsearch\ndirsearch --help",
      "arch": "python -m pip install dirsearch\ndirsearch --help",
      "mac": "python3 -m pip install dirsearch\ndirsearch --help"
    },
    "docs": "https://github.com/maurosoria/dirsearch/wiki",
    "related": [],
    "command": "dirsearch -u http://127.0.0.1:3000 -w wordlist.txt --max-rate 5",
    "commandNote": "Use a local lab URL and a wordlist file that exists on your machine.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "gobuster",
    "name": "Gobuster",
    "category": "Web Exploitation & Testing",
    "subcategory": "Fuzzing & Payload Generation",
    "description": "A fast directory, DNS, and virtual-host discovery tool written in Go for scoped testing.",
    "purpose": "A fast directory, DNS, and virtual-host discovery tool written in Go for scoped testing. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/OJ/gobuster",
    "github": "https://github.com/OJ/gobuster",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Test input validation using safe test data",
      "Discover unexpected responses in a local lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install gobuster\ngobuster --version",
      "arch": "sudo pacman -Syu gobuster\ngobuster --version",
      "mac": "brew install gobuster\ngobuster --version"
    },
    "docs": "https://github.com/OJ/gobuster",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "Wfuzz",
      "DirBuster"
    ],
    "command": "gobuster dir -u http://127.0.0.1:3000 -w wordlist.txt --no-error",
    "commandNote": "Use a local lab target and a wordlist file that exists on your machine.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "ffuf",
    "name": "ffuf",
    "category": "Web Exploitation & Testing",
    "subcategory": "Fuzzing & Payload Generation",
    "description": "A fast web fuzzer for discovering paths and testing request parameters in authorized environments.",
    "purpose": "A fast web fuzzer for discovering paths and testing request parameters in authorized environments. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/ffuf/ffuf",
    "github": "https://github.com/ffuf/ffuf",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Test input validation using safe test data",
      "Discover unexpected responses in a local lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install ffuf\nffuf --version",
      "arch": "sudo pacman -Syu ffuf\nffuf --version",
      "mac": "brew install ffuf\nffuf --version"
    },
    "docs": "https://github.com/ffuf/ffuf",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "Wfuzz",
      "DirBuster"
    ],
    "command": "ffuf -u http://127.0.0.1:3000/FUZZ -w wordlist.txt -rate 5",
    "commandNote": "Use on a local app; set request rate and scope before any approved test.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "xsser",
    "name": "XSSer",
    "category": "Web Exploitation & Testing",
    "subcategory": "SQL Injection & XSS Testing",
    "description": "A framework for checking cross-site scripting behavior in test applications and approved assessment scopes.",
    "purpose": "A framework for checking cross-site scripting behavior in test applications and approved assessment scopes. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/epsylon/xsser",
    "github": "https://github.com/epsylon/xsser",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Test input handling in a training application",
      "Verify that remediation prevents known test cases",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install xsser\nxsser --version",
      "arch": "sudo pacman -Syu xsser\nxsser --version",
      "mac": "brew install xsser\nxsser --version"
    },
    "docs": "https://github.com/epsylon/xsser",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "Wfuzz",
      "DirBuster"
    ],
    "command": "xsser --help",
    "commandNote": "Start with documentation and use only a local intentionally vulnerable test app.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "commix",
    "name": "Commix",
    "category": "Web Exploitation & Testing",
    "subcategory": "SQL Injection & XSS Testing",
    "description": "A testing framework for detecting command-injection weaknesses in authorized web application assessments.",
    "purpose": "A testing framework for detecting command-injection weaknesses in authorized web application assessments. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/commixproject/commix",
    "github": "https://github.com/commixproject/commix",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Test input handling in a training application",
      "Verify that remediation prevents known test cases",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install commix\ncommix --version",
      "arch": "sudo pacman -Syu commix\ncommix --version",
      "mac": "brew install commix\ncommix --version"
    },
    "docs": "https://github.com/commixproject/commix",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "Wfuzz",
      "DirBuster"
    ],
    "command": "commix --help",
    "commandNote": "Review safe lab usage and never test a target without explicit authorization.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "whatweb",
    "name": "WhatWeb",
    "category": "Web Exploitation & Testing",
    "subcategory": "Web Application Scanners",
    "description": "Identifies web technologies, frameworks, server headers, and other observable site fingerprints.",
    "purpose": "Identifies web technologies, frameworks, server headers, and other observable site fingerprints. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.whatweb.net/",
    "github": "https://github.com/urbanadventurer/WhatWeb",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Assess a deliberately vulnerable lab application",
      "Validate a fix against a previously documented issue",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install whatweb\nwhatweb --version",
      "arch": "sudo pacman -Syu whatweb\nwhatweb --version",
      "mac": "brew install whatweb\nwhatweb --version"
    },
    "docs": "https://www.whatweb.net/",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "Wfuzz",
      "DirBuster"
    ],
    "command": "whatweb http://127.0.0.1:3000",
    "commandNote": "Fingerprints a local test web server.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "metasploit-framework",
    "name": "Metasploit Framework",
    "category": "Web Exploitation & Testing",
    "subcategory": "Web Application Scanners",
    "description": "A penetration-testing framework used to validate known vulnerabilities in labs and explicitly authorized systems.",
    "purpose": "A penetration-testing framework used to validate known vulnerabilities in labs and explicitly authorized systems. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations. This entry covers the open-source Metasploit Framework; commercial platform features are separate.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 85,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.metasploit.com/",
    "github": "https://github.com/rapid7/metasploit-framework",
    "benefits": [
      "Reproduce application behavior in a test environment",
      "Validate findings with repeatable workflows",
      "Support remediation with clear evidence"
    ],
    "useCases": [
      "Assess a deliberately vulnerable lab application",
      "Validate a fix against a previously documented issue",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install metasploit-framework\nmetasploit-framework --version",
      "arch": "sudo pacman -Syu metasploit-framework\nmetasploit-framework --version",
      "mac": "brew install metasploit-framework\nmetasploit-framework --version"
    },
    "docs": "https://www.metasploit.com/",
    "related": [
      "Burp Suite Professional",
      "sqlmap",
      "Wfuzz",
      "DirBuster"
    ],
    "command": "msfconsole -q -x \"version; exit\"",
    "commandNote": "Displays version information without launching an exploit.",
    "licenseNote": "This entry covers the open-source Metasploit Framework. Commercial product features and services are separate; verify licensing for the exact components you use."
  },
  {
    "id": "hashcat",
    "name": "Hashcat",
    "category": "Cryptography & Hashing",
    "subcategory": "Hash Cracking",
    "description": "A high-performance password recovery utility supporting a wide range of hash types and compute backends.",
    "purpose": "A high-performance password recovery utility supporting a wide range of hash types and compute backends. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://hashcat.net/hashcat/",
    "github": "https://github.com/hashcat/hashcat",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Audit hashes from an approved password assessment",
      "Demonstrate why strong password policies matter",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install hashcat\nhashcat --version",
      "arch": "sudo pacman -Syu hashcat\nhashcat --version",
      "mac": "brew install hashcat\nhashcat --version"
    },
    "docs": "https://hashcat.net/hashcat/",
    "related": [
      "John the Ripper",
      "CyberChef",
      "THC Hydra",
      "Medusa"
    ],
    "command": "hashcat --help",
    "commandNote": "Review supported algorithms and use only hashes you own or are explicitly authorized to audit.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "john-the-ripper",
    "name": "John the Ripper",
    "category": "Cryptography & Hashing",
    "subcategory": "Hash Cracking",
    "description": "A password security auditing and recovery tool that supports many password hash formats.",
    "purpose": "A password security auditing and recovery tool that supports many password hash formats. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.openwall.com/john/",
    "github": "https://github.com/openwall/john",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Audit hashes from an approved password assessment",
      "Demonstrate why strong password policies matter",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install john\njohn --version",
      "arch": "sudo pacman -Syu john\njohn --version",
      "mac": "brew install john\njohn --version"
    },
    "docs": "https://www.openwall.com/john/",
    "related": [
      "Hashcat",
      "CyberChef",
      "THC Hydra",
      "Medusa"
    ],
    "command": "john --test",
    "commandNote": "Runs a local benchmark; it does not target a remote system.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "cyberchef",
    "name": "CyberChef",
    "category": "Cryptography & Hashing",
    "subcategory": "Encryption/Decryption",
    "description": "A browser-based workbench for encoding, decoding, hashing, parsing, and transforming data.",
    "purpose": "A browser-based workbench for encoding, decoding, hashing, parsing, and transforming data. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "Web",
      "System"
    ],
    "website": "https://gchq.github.io/CyberChef/",
    "github": "https://github.com/gchq/CyberChef",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Decode and transform sample data",
      "Document a reproducible data-processing recipe",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://gchq.github.io/CyberChef/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://gchq.github.io/CyberChef/",
    "related": [
      "Hashcat",
      "John the Ripper",
      "THC Hydra",
      "Medusa"
    ],
    "command": "Open the official CyberChef page and drag an operation into the recipe",
    "commandNote": "Browser-based workbench for transformations and decoding. Do not paste secrets into public hosted instances.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "thc-hydra",
    "name": "THC Hydra",
    "category": "Cryptography & Hashing",
    "subcategory": "Password Analysis",
    "description": "A network login auditing tool used to evaluate authentication strength in authorized lab environments.",
    "purpose": "A network login auditing tool used to evaluate authentication strength in authorized lab environments. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/vanhauser-thc/thc-hydra",
    "github": "https://github.com/vanhauser-thc/thc-hydra",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Evaluate password policy using approved test accounts",
      "Measure resilience in a contained lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install hydra\nhydra --version",
      "arch": "sudo pacman -Syu hydra\nhydra --version",
      "mac": "brew install hydra\nhydra --version"
    },
    "docs": "https://github.com/vanhauser-thc/thc-hydra",
    "related": [
      "Hashcat",
      "John the Ripper",
      "CyberChef",
      "Medusa"
    ],
    "command": "hydra -h",
    "commandNote": "Read available options first. Authentication testing requires explicit written authorization.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "medusa",
    "name": "Medusa",
    "category": "Cryptography & Hashing",
    "subcategory": "Password Analysis",
    "description": "A modular login auditing tool for controlled assessments of supported network authentication services.",
    "purpose": "A modular login auditing tool for controlled assessments of supported network authentication services. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/jmk-foofus/medusa",
    "github": "https://github.com/jmk-foofus/medusa",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Evaluate password policy using approved test accounts",
      "Measure resilience in a contained lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install medusa\nmedusa --version",
      "arch": "sudo pacman -Syu medusa\nmedusa --version",
      "mac": "brew install medusa\nmedusa --version"
    },
    "docs": "https://github.com/jmk-foofus/medusa",
    "related": [
      "Hashcat",
      "John the Ripper",
      "CyberChef",
      "THC Hydra"
    ],
    "command": "medusa -h",
    "commandNote": "Review the help output. Use only in a controlled authentication-testing lab.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "crunch",
    "name": "Crunch",
    "category": "Cryptography & Hashing",
    "subcategory": "Password Analysis",
    "description": "Generates wordlists from defined character sets and length rules for password-policy testing.",
    "purpose": "Generates wordlists from defined character sets and length rules for password-policy testing. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://www.kali.org/tools/crunch/",
    "github": "https://github.com/crunchsec/crunch",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Evaluate password policy using approved test accounts",
      "Measure resilience in a contained lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install crunch\ncrunch --version",
      "arch": "sudo pacman -Syu crunch\ncrunch --version",
      "mac": "brew install crunch\ncrunch --version"
    },
    "docs": "https://www.kali.org/tools/crunch/",
    "related": [
      "Hashcat",
      "John the Ripper",
      "CyberChef",
      "THC Hydra"
    ],
    "command": "crunch 4 4 0123 -o sample-wordlist.txt",
    "commandNote": "Generates a tiny local example wordlist.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "openssl",
    "name": "OpenSSL",
    "category": "Cryptography & Hashing",
    "subcategory": "Encryption/Decryption",
    "description": "A widely used open-source toolkit for cryptographic operations and TLS certificate inspection.",
    "purpose": "OpenSSL can inspect certificate chains, generate keys, and exercise cryptographic formats. Keep private keys private and avoid uploading real secrets or production credentials to untrusted systems.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.openssl.org/",
    "github": "https://github.com/openssl/openssl",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt install openssl\nopenssl version",
      "arch": "sudo pacman -S openssl\nopenssl version",
      "mac": "brew install openssl\nopenssl version"
    },
    "docs": "https://docs.openssl.org/",
    "related": [],
    "command": "openssl s_client -connect example.com:443 -servername example.com </dev/null",
    "commandNote": "Reads the public TLS handshake and certificate chain for a domain you are allowed to inspect.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "certbot",
    "name": "Certbot",
    "category": "Cryptography & Hashing",
    "subcategory": "Certificate Tools",
    "description": "Automates issuance and renewal of TLS certificates from Let’s Encrypt for supported web servers.",
    "purpose": "Automates issuance and renewal of TLS certificates from Let’s Encrypt for supported web servers. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://certbot.eff.org/",
    "github": "https://github.com/certbot/certbot",
    "benefits": [
      "Inspect data formats and cryptographic configuration",
      "Audit password policy using authorized samples",
      "Improve certificate and credential hygiene"
    ],
    "useCases": [
      "Review TLS configuration on a site you administer",
      "Automate certificate lifecycle management",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install certbot\ncertbot --version",
      "arch": "sudo pacman -Syu certbot\ncertbot --version",
      "mac": "brew install certbot\ncertbot --version"
    },
    "docs": "https://certbot.eff.org/",
    "related": [
      "Hashcat",
      "John the Ripper",
      "CyberChef",
      "THC Hydra"
    ],
    "command": "certbot --help",
    "commandNote": "Lists certificate client commands. Use the correct method for a domain and server you administer.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "wireshark",
    "name": "Wireshark",
    "category": "Network & Packet Analysis",
    "subcategory": "Packet Sniffing",
    "description": "A graphical protocol analyzer for inspecting packet captures and troubleshooting network behavior.",
    "purpose": "A graphical protocol analyzer for inspecting packet captures and troubleshooting network behavior. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.wireshark.org/",
    "github": "https://gitlab.com/wireshark/wireshark",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Troubleshoot protocol issues from a packet capture",
      "Inspect traffic generated by your own test app",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install wireshark\nwireshark --version",
      "arch": "sudo pacman -Syu wireshark\nwireshark --version",
      "mac": "brew install wireshark\nwireshark --version"
    },
    "docs": "https://www.wireshark.org/",
    "related": [
      "tcpdump",
      "Suricata",
      "Zeek",
      "TShark"
    ],
    "command": "Open a sample .pcap file in Wireshark and apply `dns` as a display filter",
    "commandNote": "Analyze sample or authorized packet captures.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "tcpdump",
    "name": "tcpdump",
    "category": "Network & Packet Analysis",
    "subcategory": "Packet Sniffing",
    "description": "A command-line packet capture utility for observing traffic on interfaces and analyzing capture files.",
    "purpose": "A command-line packet capture utility for observing traffic on interfaces and analyzing capture files. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.tcpdump.org/",
    "github": "https://github.com/the-tcpdump-group/tcpdump",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Troubleshoot protocol issues from a packet capture",
      "Inspect traffic generated by your own test app",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install tcpdump\ntcpdump --version",
      "arch": "sudo pacman -Syu tcpdump\ntcpdump --version",
      "mac": "brew install tcpdump\ntcpdump --version"
    },
    "docs": "https://www.tcpdump.org/",
    "related": [
      "Wireshark",
      "Suricata",
      "Zeek",
      "TShark"
    ],
    "command": "sudo tcpdump -i lo -nn -c 20",
    "commandNote": "Captures up to 20 packets on the loopback interface.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "suricata",
    "name": "Suricata",
    "category": "Network & Packet Analysis",
    "subcategory": "Traffic Analysis",
    "description": "A high-performance network threat detection engine supporting IDS, IPS, and network security monitoring.",
    "purpose": "A high-performance network threat detection engine supporting IDS, IPS, and network security monitoring. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://suricata.io/",
    "github": "https://github.com/OISF/suricata",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Review network events for suspicious patterns",
      "Validate detection rules against recorded traffic",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install suricata\nsuricata --version",
      "arch": "sudo pacman -Syu suricata\nsuricata --version",
      "mac": "brew install suricata\nsuricata --version"
    },
    "docs": "https://suricata.io/",
    "related": [
      "Wireshark",
      "tcpdump",
      "Zeek",
      "TShark"
    ],
    "command": "suricata --build-info",
    "commandNote": "Displays build features; production rules require careful tuning.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "zeek",
    "name": "Zeek",
    "category": "Network & Packet Analysis",
    "subcategory": "Protocol Analysis",
    "description": "A network security monitor that produces structured logs describing network activity and protocol behavior.",
    "purpose": "A network security monitor that produces structured logs describing network activity and protocol behavior. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://zeek.org/",
    "github": "https://github.com/zeek/zeek",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Decode unfamiliar protocol exchanges in a lab",
      "Investigate malformed packets from a test capture",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install zeek\nzeek --version",
      "arch": "sudo pacman -Syu zeek\nzeek --version",
      "mac": "brew install zeek\nzeek --version"
    },
    "docs": "https://zeek.org/",
    "related": [
      "Wireshark",
      "tcpdump",
      "Suricata",
      "TShark"
    ],
    "command": "zeek --version",
    "commandNote": "Verifies the installed version before running a capture against an approved interface or pcap.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "tshark",
    "name": "TShark",
    "category": "Network & Packet Analysis",
    "subcategory": "Protocol Analysis",
    "description": "Wireshark’s command-line protocol analyzer for filtering, reading, and summarizing packet captures.",
    "purpose": "Wireshark’s command-line protocol analyzer for filtering, reading, and summarizing packet captures. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.wireshark.org/docs/man-pages/tshark.html",
    "github": "https://gitlab.com/wireshark/wireshark",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Decode unfamiliar protocol exchanges in a lab",
      "Investigate malformed packets from a test capture",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install tshark\ntshark --version",
      "arch": "sudo pacman -Syu tshark\ntshark --version",
      "mac": "brew install tshark\ntshark --version"
    },
    "docs": "https://www.wireshark.org/docs/man-pages/tshark.html",
    "related": [
      "Wireshark",
      "tcpdump",
      "Suricata",
      "Zeek"
    ],
    "command": "tshark -r sample.pcap -Y dns -T fields -e dns.qry.name",
    "commandNote": "Reads DNS query names from a local packet capture.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "aircrack-ng",
    "name": "Aircrack-ng",
    "category": "Network & Packet Analysis",
    "subcategory": "Wireless Analysis",
    "description": "A wireless network assessment suite for monitoring, testing, and validating Wi-Fi security in authorized labs.",
    "purpose": "A wireless network assessment suite for monitoring, testing, and validating Wi-Fi security in authorized labs. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.aircrack-ng.org/",
    "github": "https://github.com/aircrack-ng/aircrack-ng",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Audit a network you own or are authorized to assess",
      "Review channel and signal conditions in a lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install aircrack-ng\naircrack-ng --version",
      "arch": "sudo pacman -Syu aircrack-ng\naircrack-ng --version",
      "mac": "brew install aircrack-ng\naircrack-ng --version"
    },
    "docs": "https://www.aircrack-ng.org/",
    "related": [
      "Wireshark",
      "tcpdump",
      "Suricata",
      "Zeek"
    ],
    "command": "aircrack-ng --help",
    "commandNote": "For authorized Wi-Fi auditing only; use your own lab capture and network.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "kismet",
    "name": "Kismet",
    "category": "Network & Packet Analysis",
    "subcategory": "Wireless Analysis",
    "description": "A wireless network detector and monitoring system with support for multiple capture sources.",
    "purpose": "A wireless network detector and monitoring system with support for multiple capture sources. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.kismetwireless.net/",
    "github": "https://github.com/kismetwireless/kismet",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Audit a network you own or are authorized to assess",
      "Review channel and signal conditions in a lab",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install kismet\nkismet --version",
      "arch": "sudo pacman -Syu kismet\nkismet --version",
      "mac": "brew install kismet\nkismet --version"
    },
    "docs": "https://www.kismetwireless.net/",
    "related": [
      "Wireshark",
      "tcpdump",
      "Suricata",
      "Zeek"
    ],
    "command": "kismet --version",
    "commandNote": "Check the build/version; wireless monitoring should follow local law and consent requirements.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "ettercap",
    "name": "Ettercap",
    "category": "Network & Packet Analysis",
    "subcategory": "Traffic Analysis",
    "description": "A network analysis suite for examining traffic and demonstrating security concepts in controlled test networks.",
    "purpose": "A network analysis suite for examining traffic and demonstrating security concepts in controlled test networks. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://www.ettercap-project.org/",
    "github": "https://github.com/Ettercap/ettercap",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Review network events for suspicious patterns",
      "Validate detection rules against recorded traffic",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install ettercap\nettercap --version",
      "arch": "sudo pacman -Syu ettercap\nettercap --version",
      "mac": "brew install ettercap\nettercap --version"
    },
    "docs": "https://www.ettercap-project.org/",
    "related": [
      "Wireshark",
      "tcpdump",
      "Suricata",
      "Zeek"
    ],
    "command": "ettercap -h",
    "commandNote": "Review modes and use only in an isolated lab you control.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "scapy",
    "name": "Scapy",
    "category": "Network & Packet Analysis",
    "subcategory": "Protocol Analysis",
    "description": "A Python packet manipulation library for building, decoding, and analyzing network protocols.",
    "purpose": "A Python packet manipulation library for building, decoding, and analyzing network protocols. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://scapy.net/",
    "github": "https://github.com/secdev/scapy",
    "benefits": [
      "Turn raw traffic into readable observations",
      "Troubleshoot protocol and connectivity issues",
      "Support defensive monitoring and incident response"
    ],
    "useCases": [
      "Decode unfamiliar protocol exchanges in a lab",
      "Investigate malformed packets from a test capture",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install python3-scapy\npython3-scapy --version",
      "arch": "sudo pacman -Syu python3-scapy\npython3-scapy --version",
      "mac": "brew install python3-scapy\npython3-scapy --version"
    },
    "docs": "https://scapy.net/",
    "related": [
      "Wireshark",
      "tcpdump",
      "Suricata",
      "Zeek"
    ],
    "command": "python3 -c \"from scapy.all import IP; print(IP(dst='127.0.0.1'))\"",
    "commandNote": "Creates a packet description locally; it does not send traffic.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "autopsy",
    "name": "Autopsy",
    "category": "Forensics & Log Analysis",
    "subcategory": "Digital Forensics",
    "description": "A digital forensics platform for examining disk images, recovering artifacts, and documenting investigative findings.",
    "purpose": "A digital forensics platform for examining disk images, recovering artifacts, and documenting investigative findings. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System"
    ],
    "website": "https://www.autopsy.com/",
    "github": "https://github.com/sleuthkit/autopsy",
    "benefits": [
      "Preserve and review relevant digital artifacts",
      "Correlate events across multiple data sources",
      "Create repeatable investigative notes and timelines"
    ],
    "useCases": [
      "Create a documented workflow for examining disk images",
      "Recover artifacts from a test evidence set",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://www.autopsy.com/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://www.autopsy.com/",
    "related": [
      "Volatility 3",
      "Splunk Enterprise",
      "Elastic Stack",
      "Graylog"
    ],
    "command": "Launch Autopsy → New Case → Add Data Source → select a forensic image copy",
    "commandNote": "Use a verified evidence copy and preserve the original.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "volatility-3",
    "name": "Volatility 3",
    "category": "Forensics & Log Analysis",
    "subcategory": "Memory Forensics",
    "description": "An open-source framework for extracting forensic artifacts from memory images.",
    "purpose": "An open-source framework for extracting forensic artifacts from memory images. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://volatilityfoundation.org/",
    "github": "https://github.com/volatilityfoundation/volatility3",
    "benefits": [
      "Preserve and review relevant digital artifacts",
      "Correlate events across multiple data sources",
      "Create repeatable investigative notes and timelines"
    ],
    "useCases": [
      "Inspect a captured memory image during an incident exercise",
      "Correlate running-process artifacts with system logs",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://volatilityfoundation.org/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://volatilityfoundation.org/",
    "related": [
      "Autopsy",
      "Splunk Enterprise",
      "Elastic Stack",
      "Graylog"
    ],
    "command": "vol -f memory.raw windows.info",
    "commandNote": "Analyzes a local memory image; plugin availability depends on the artifact and OS.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "velociraptor",
    "name": "Velociraptor",
    "category": "Forensics & Log Analysis",
    "subcategory": "Digital Forensics",
    "description": "An open-source digital forensics and incident response platform for endpoint visibility and collection.",
    "purpose": "Velociraptor supports incident response workflows and structured collection from managed endpoints. Deploy only with organizational approval, document collection scope, and handle evidence according to policy.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/Velocidex/velociraptor",
    "github": "https://github.com/Velocidex/velociraptor",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "web": "See the official documentation for the server/client deployment workflow.",
      "debian": "Download the signed release for your OS from the official project, then verify the release documentation."
    },
    "docs": "https://docs.velociraptor.app/",
    "related": [],
    "command": "velociraptor version",
    "commandNote": "Prints the installed version; collection workflows should follow your incident-response authorization.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "plaso",
    "name": "Plaso (log2timeline)",
    "category": "Forensics & Log Analysis",
    "subcategory": "Timeline & Log Analysis",
    "description": "An open-source forensic timeline engine that parses event data into a normalized timeline.",
    "purpose": "Plaso helps investigators normalize supported artifacts into a timeline for later review. Preserve original evidence, work from verified copies, and document time-zone and parsing assumptions.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/log2timeline/plaso",
    "github": "https://github.com/log2timeline/plaso",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "See the official installation guide for supported Python/OS versions.\nlog2timeline.py --help",
      "mac": "See the official project install instructions.\nlog2timeline.py --help"
    },
    "docs": "https://plaso.readthedocs.io/",
    "related": [],
    "command": "log2timeline.py --help",
    "commandNote": "Start with the help screen; process only evidence you are authorized to handle.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "timesketch",
    "name": "Timesketch",
    "category": "Forensics & Log Analysis",
    "subcategory": "Timeline & Log Analysis",
    "description": "An open-source collaborative forensic timeline analysis tool for exploring events from multiple sources.",
    "purpose": "Timesketch helps teams annotate and analyze normalized timelines. Use a controlled case environment, preserve provenance, and avoid placing sensitive evidence in an unapproved service.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://github.com/google/timesketch",
    "github": "https://github.com/google/timesketch",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "web": "See the official deployment guide; Timesketch is commonly deployed as a service.",
      "debian": "Follow the official installation/deployment documentation for the chosen deployment method."
    },
    "docs": "https://timesketch.org/guides/",
    "related": [],
    "command": "timesketch_importer --help",
    "commandNote": "Shows importer options; actual imports should use evidence copies and a documented case.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "sleuthkit",
    "name": "The Sleuth Kit",
    "category": "Forensics & Log Analysis",
    "subcategory": "Digital Forensics",
    "description": "An open-source collection of command-line tools for examining disk images and file-system artifacts.",
    "purpose": "The Sleuth Kit provides read-oriented forensic utilities for inspecting disk images and file-system metadata. Work from verified forensic images, preserve hashes, and document every examination step.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.sleuthkit.org/",
    "github": "https://github.com/sleuthkit/sleuthkit",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt install sleuthkit\nfls -V",
      "arch": "sudo pacman -S sleuthkit\nfls -V",
      "mac": "brew install sleuthkit\nfls -V"
    },
    "docs": "https://www.sleuthkit.org/sleuthkit/docs.php",
    "related": [],
    "command": "fls -r -o 0 disk-image.dd | head -40",
    "commandNote": "Example lists entries in a local forensic image; verify the image and partition offset before using.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "sift-workstation",
    "name": "SIFT Workstation",
    "category": "Forensics & Log Analysis",
    "subcategory": "Digital Forensics",
    "description": "A curated forensic workstation with tools for examining disk images, timelines, file systems, and artifacts.",
    "purpose": "A curated forensic workstation with tools for examining disk images, timelines, file systems, and artifacts. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System"
    ],
    "website": "https://www.sans.org/tools/sift-workstation/",
    "github": "https://github.com/teamdfir/sift",
    "benefits": [
      "Preserve and review relevant digital artifacts",
      "Correlate events across multiple data sources",
      "Create repeatable investigative notes and timelines"
    ],
    "useCases": [
      "Create a documented workflow for examining disk images",
      "Recover artifacts from a test evidence set",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://www.sans.org/tools/sift-workstation/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://www.sans.org/tools/sift-workstation/",
    "related": [
      "Autopsy",
      "Volatility 3",
      "Splunk Enterprise",
      "Elastic Stack"
    ],
    "command": "See the official SIFT Workstation install and validation guide",
    "commandNote": "SIFT is a forensic environment; preserve evidence and record the tool versions used.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "xplico",
    "name": "Xplico",
    "category": "Forensics & Log Analysis",
    "subcategory": "Data Recovery",
    "description": "A network forensics analysis tool that reconstructs application data from supported packet captures.",
    "purpose": "A network forensics analysis tool that reconstructs application data from supported packet captures. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://www.xplico.org/",
    "github": "https://github.com/xplico/xplico",
    "benefits": [
      "Preserve and review relevant digital artifacts",
      "Correlate events across multiple data sources",
      "Create repeatable investigative notes and timelines"
    ],
    "useCases": [
      "Reconstruct application artifacts from provided evidence",
      "Analyze a packet capture from an incident simulation",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install xplico\nxplico --version",
      "arch": "sudo pacman -Syu xplico\nxplico --version",
      "mac": "brew install xplico\nxplico --version"
    },
    "docs": "https://www.xplico.org/",
    "related": [
      "Autopsy",
      "Volatility 3",
      "Splunk Enterprise",
      "Elastic Stack"
    ],
    "command": "See the official Xplico documentation for capture import and analysis",
    "commandNote": "Analyze only captures collected with permission.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "osint-framework",
    "name": "OSINT Framework",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "All-in-One Platforms",
    "description": "A categorized, interactive collection of links to OSINT resources and investigative utilities.",
    "purpose": "A categorized, interactive collection of links to OSINT resources and investigative utilities. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 86,
    "platforms": [
      "Web"
    ],
    "website": "https://osintframework.com/",
    "github": "https://github.com/lockfale/OSINT-Framework",
    "benefits": [
      "Organize information sources and relationships",
      "Enrich indicators with additional context",
      "Keep investigation output consistent and shareable"
    ],
    "useCases": [
      "Build an investigation checklist from multiple sources",
      "Keep recurring research steps in one reference point",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "No local installation required. Access the official service at https://osintframework.com/."
    },
    "docs": "https://osintframework.com/",
    "related": [
      "IntelOwl",
      "MISP",
      "OpenCTI",
      "Recorded Future"
    ],
    "command": "Open the OSINT Framework site and choose a branch matching your research question",
    "commandNote": "It is a categorized resource map, not a single command-line application.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "intelowl",
    "name": "IntelOwl",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "Information Aggregation",
    "description": "An open-source platform that orchestrates analyzers and connectors to enrich observables for threat analysis.",
    "purpose": "An open-source platform that orchestrates analyzers and connectors to enrich observables for threat analysis. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "Web",
      "System"
    ],
    "website": "https://intelowlproject.github.io/",
    "github": "https://github.com/intelowlproject/IntelOwl",
    "benefits": [
      "Organize information sources and relationships",
      "Enrich indicators with additional context",
      "Keep investigation output consistent and shareable"
    ],
    "useCases": [
      "Enrich approved indicators for a threat report",
      "Correlate reports and sightings from trusted sources",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://intelowlproject.github.io/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://intelowlproject.github.io/",
    "related": [
      "OSINT Framework",
      "MISP",
      "OpenCTI",
      "Recorded Future"
    ],
    "command": "See the official IntelOwl API and deployment docs",
    "commandNote": "Deploy locally and submit only artifacts you are authorized to analyze.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "misp",
    "name": "MISP",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "Information Aggregation",
    "description": "A threat intelligence platform for sharing, correlating, and managing structured indicators and events.",
    "purpose": "A threat intelligence platform for sharing, correlating, and managing structured indicators and events. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "Web",
      "System"
    ],
    "website": "https://www.misp-project.org/",
    "github": "https://github.com/MISP/MISP",
    "benefits": [
      "Organize information sources and relationships",
      "Enrich indicators with additional context",
      "Keep investigation output consistent and shareable"
    ],
    "useCases": [
      "Enrich approved indicators for a threat report",
      "Correlate reports and sightings from trusted sources",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://www.misp-project.org/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://www.misp-project.org/",
    "related": [
      "OSINT Framework",
      "IntelOwl",
      "OpenCTI",
      "Recorded Future"
    ],
    "command": "Use the MISP UI/API after deploying a local instance",
    "commandNote": "Share indicators only in line with your organization’s handling and disclosure policy.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "opencti",
    "name": "OpenCTI",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "Information Aggregation",
    "description": "A platform for organizing cyber threat intelligence, entities, relationships, and analytical context.",
    "purpose": "A platform for organizing cyber threat intelligence, entities, relationships, and analytical context. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "Web",
      "System"
    ],
    "website": "https://www.opencti.io/",
    "github": "https://github.com/OpenCTI-Platform/opencti",
    "benefits": [
      "Organize information sources and relationships",
      "Enrich indicators with additional context",
      "Keep investigation output consistent and shareable"
    ],
    "useCases": [
      "Enrich approved indicators for a threat report",
      "Correlate reports and sightings from trusted sources",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://www.opencti.io/",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://www.opencti.io/",
    "related": [
      "OSINT Framework",
      "IntelOwl",
      "MISP",
      "Recorded Future"
    ],
    "command": "Use the official OpenCTI deployment guide and connector documentation",
    "commandNote": "Self-hosted threat-intelligence platform; protect tokens and sensitive observables.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "yeti",
    "name": "Yeti",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "Information Aggregation",
    "description": "An open-source threat-intelligence platform for organizing observables, indicators, and analyst context.",
    "purpose": "Yeti helps teams collect and relate threat-intelligence observables in one workspace. Use trusted feeds, track provenance, and separate observed facts from analyst hypotheses.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Debian"
    ],
    "website": "https://github.com/yeti-platform/yeti",
    "github": "https://github.com/yeti-platform/yeti",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "web": "Follow the official deployment documentation; Yeti is a self-hosted platform.",
      "debian": "Use the official deployment guide for the current supported method."
    },
    "docs": "https://yeti-platform.github.io/",
    "related": [],
    "command": "docker compose ps",
    "commandNote": "Run this from a Yeti deployment directory to inspect service status.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "faraday",
    "name": "Faraday Community",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "Reporting Tools",
    "description": "An open-source collaborative penetration-testing and security assessment workspace.",
    "purpose": "Faraday centralizes findings and notes across approved security assessments. Keep records scoped to authorized work, redact secrets, and use a consistent evidence and remediation format.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/infobyte/faraday",
    "github": "https://github.com/infobyte/faraday",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "web": "Follow the official self-hosted setup guide.",
      "debian": "Follow the supported installation guide in the official documentation."
    },
    "docs": "https://docs.faradaysec.com/",
    "related": [],
    "command": "faraday-server --help",
    "commandNote": "Displays server options; deployment commands can vary by release.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "reconftw",
    "name": "ReconFTW",
    "category": "OSINT Frameworks & Aggregators",
    "subcategory": "All-in-One Platforms",
    "description": "A modular reconnaissance automation framework for organizing domain and asset discovery workflows.",
    "purpose": "A modular reconnaissance automation framework for organizing domain and asset discovery workflows. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Advanced",
    "price": "Free / Open source",
    "trustScore": 89,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://github.com/six2six/reconftw",
    "github": "https://github.com/six2six/reconftw",
    "benefits": [
      "Organize information sources and relationships",
      "Enrich indicators with additional context",
      "Keep investigation output consistent and shareable"
    ],
    "useCases": [
      "Build an investigation checklist from multiple sources",
      "Keep recurring research steps in one reference point",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "Open the official site: https://github.com/six2six/reconftw",
      "debian": "Check the official documentation for supported Linux installation options.",
      "arch": "Check the official documentation or AUR package details before installing.",
      "mac": "Check the official documentation for supported macOS installation options."
    },
    "docs": "https://github.com/six2six/reconftw",
    "related": [
      "OSINT Framework",
      "IntelOwl",
      "MISP",
      "OpenCTI"
    ],
    "command": "./reconftw.sh --help",
    "commandNote": "Review scope and configuration before running any collection workflow.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "git",
    "name": "Git",
    "category": "Productivity & Utilities",
    "subcategory": "Command-Line Tools",
    "description": "A distributed version control system for tracking changes, reviewing history, and collaborating on code.",
    "purpose": "A distributed version control system for tracking changes, reviewing history, and collaborating on code. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://git-scm.com/",
    "github": "https://github.com/git/git",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Automate repeatable local diagnostics",
      "Process data in scripts and shell pipelines",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install git\ngit --version",
      "arch": "sudo pacman -Syu git\ngit --version",
      "mac": "brew install git\ngit --version"
    },
    "docs": "https://git-scm.com/",
    "related": [
      "Docker",
      "tmux",
      "curl",
      "Wget"
    ],
    "command": "git status --short",
    "commandNote": "Shows local working-tree changes in the current repository.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "podman",
    "name": "Podman",
    "category": "Productivity & Utilities",
    "subcategory": "Terminal Utilities",
    "description": "A daemonless, open-source container engine with a Docker-compatible command interface.",
    "purpose": "Podman runs containers and images for reproducible local labs and isolated tools. Prefer rootless containers where possible, pin image versions, and avoid mounting sensitive host paths unnecessarily.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://podman.io/",
    "github": "https://github.com/containers/podman",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt install podman\npodman --version",
      "arch": "sudo pacman -S podman\npodman --version",
      "mac": "brew install podman\npodman --version"
    },
    "docs": "https://docs.podman.io/",
    "related": [],
    "command": "podman run --rm docker.io/library/alpine:latest echo \"container ready\"",
    "commandNote": "Runs a disposable, minimal container and removes it after completion.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "tmux",
    "name": "tmux",
    "category": "Productivity & Utilities",
    "subcategory": "Terminal Utilities",
    "description": "A terminal multiplexer that keeps persistent sessions and arranges multiple shell panes in one terminal.",
    "purpose": "A terminal multiplexer that keeps persistent sessions and arranges multiple shell panes in one terminal. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/tmux/tmux",
    "github": "https://github.com/tmux/tmux",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Organize longer troubleshooting sessions",
      "Reduce repetitive terminal navigation and text processing",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install tmux\ntmux --version",
      "arch": "sudo pacman -Syu tmux\ntmux --version",
      "mac": "brew install tmux\ntmux --version"
    },
    "docs": "https://github.com/tmux/tmux",
    "related": [
      "Git",
      "Docker",
      "curl",
      "Wget"
    ],
    "command": "tmux new -s lab",
    "commandNote": "Starts a named local terminal session.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "curl",
    "name": "curl",
    "category": "Productivity & Utilities",
    "subcategory": "Command-Line Tools",
    "description": "A command-line tool for transferring data with URL-based protocols and inspecting HTTP interactions.",
    "purpose": "A command-line tool for transferring data with URL-based protocols and inspecting HTTP interactions. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://curl.se/",
    "github": "https://github.com/curl/curl",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Automate repeatable local diagnostics",
      "Process data in scripts and shell pipelines",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install curl\ncurl --version",
      "arch": "sudo pacman -Syu curl\ncurl --version",
      "mac": "brew install curl\ncurl --version"
    },
    "docs": "https://curl.se/",
    "related": [
      "Git",
      "Docker",
      "tmux",
      "Wget"
    ],
    "command": "curl -I https://example.com",
    "commandNote": "Requests response headers from the example domain.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "wget",
    "name": "Wget",
    "category": "Productivity & Utilities",
    "subcategory": "Command-Line Tools",
    "description": "A command-line downloader that supports recursive retrieval and resumable transfers for supported protocols.",
    "purpose": "A command-line downloader that supports recursive retrieval and resumable transfers for supported protocols. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.gnu.org/software/wget/",
    "github": "https://git.savannah.gnu.org/cgit/wget.git",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Automate repeatable local diagnostics",
      "Process data in scripts and shell pipelines",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install wget\nwget --version",
      "arch": "sudo pacman -Syu wget\nwget --version",
      "mac": "brew install wget\nwget --version"
    },
    "docs": "https://www.gnu.org/software/wget/",
    "related": [
      "Git",
      "Docker",
      "tmux",
      "curl"
    ],
    "command": "wget --spider https://example.com",
    "commandNote": "Checks whether a URL appears reachable without saving the file.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "grep",
    "name": "grep",
    "category": "Productivity & Utilities",
    "subcategory": "Terminal Utilities",
    "description": "A command-line utility for searching text streams and files with fixed strings or regular expressions.",
    "purpose": "A command-line utility for searching text streams and files with fixed strings or regular expressions. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://www.gnu.org/software/grep/",
    "github": "https://git.savannah.gnu.org/cgit/grep.git",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Organize longer troubleshooting sessions",
      "Reduce repetitive terminal navigation and text processing",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install grep\ngrep --version",
      "arch": "sudo pacman -Syu grep\ngrep --version",
      "mac": "brew install grep\ngrep --version"
    },
    "docs": "https://www.gnu.org/software/grep/",
    "related": [
      "Git",
      "Docker",
      "tmux",
      "curl"
    ],
    "command": "grep -Rni \"TODO\" ./",
    "commandNote": "Searches the current project folder for TODO markers.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "netcat-openbsd",
    "name": "Netcat (OpenBSD)",
    "category": "Productivity & Utilities",
    "subcategory": "Command-Line Tools",
    "description": "A small networking utility for reading and writing TCP or UDP connections during diagnostics and lab work.",
    "purpose": "A small networking utility for reading and writing TCP or UDP connections during diagnostics and lab work. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Debian"
    ],
    "website": "https://man.openbsd.org/nc.1",
    "github": "https://github.com/openbsd/src/tree/master/usr.bin/nc",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Automate repeatable local diagnostics",
      "Process data in scripts and shell pipelines",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install netcat-openbsd\nnetcat-openbsd --version",
      "arch": "sudo pacman -Syu netcat-openbsd\nnetcat-openbsd --version",
      "mac": "brew install netcat-openbsd\nnetcat-openbsd --version"
    },
    "docs": "https://man.openbsd.org/nc.1",
    "related": [
      "Git",
      "Docker",
      "tmux",
      "curl"
    ],
    "command": "nc -vz 127.0.0.1 22",
    "commandNote": "Checks whether SSH is listening on the local machine.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "regexr",
    "name": "RegExr",
    "category": "Productivity & Utilities",
    "subcategory": "Conversion Tools",
    "description": "An interactive browser tool for learning, building, and testing regular expressions against sample text.",
    "purpose": "An interactive browser tool for learning, building, and testing regular expressions against sample text. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 86,
    "platforms": [
      "Web"
    ],
    "website": "https://regexr.com/",
    "github": "https://github.com/gskinner/regexr",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Normalize structured data for analysis",
      "Validate expressions and formats using sample inputs",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "web": "No local installation required. Access the official service at https://regexr.com/."
    },
    "docs": "https://regexr.com/",
    "related": [
      "Git",
      "Docker",
      "tmux",
      "curl"
    ],
    "command": "Open RegExr → enter test text → enter a pattern such as `\\b[A-Z]{2,}\\b`",
    "commandNote": "Try expressions against sample strings; avoid pasting private data into hosted tools.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "jq",
    "name": "jq",
    "category": "Productivity & Utilities",
    "subcategory": "Conversion Tools",
    "description": "A lightweight command-line JSON processor for filtering, transforming, and extracting structured data.",
    "purpose": "A lightweight command-line JSON processor for filtering, transforming, and extracting structured data. Use it within a clearly defined, authorized scope and retain notes on sources, timestamps, and limitations.",
    "difficulty": "Intermediate",
    "price": "Free / Open source",
    "trustScore": 90,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://jqlang.github.io/jq/",
    "github": "https://github.com/jqlang/jq",
    "benefits": [
      "Reduce repetitive manual steps",
      "Make technical workflows reproducible",
      "Inspect, transform, and document data efficiently"
    ],
    "useCases": [
      "Normalize structured data for analysis",
      "Validate expressions and formats using sample inputs",
      "Summarize relevant results for a defensive report"
    ],
    "install": {
      "debian": "sudo apt update\nsudo apt install jq\njq --version",
      "arch": "sudo pacman -Syu jq\njq --version",
      "mac": "brew install jq\njq --version"
    },
    "docs": "https://jqlang.github.io/jq/",
    "related": [
      "Git",
      "Docker",
      "tmux",
      "curl"
    ],
    "command": "printf '{\"status\":\"ok\"}\\n' | jq .",
    "commandNote": "Formats a small JSON object.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "httpie",
    "name": "HTTPie",
    "category": "Productivity & Utilities",
    "subcategory": "Command-Line Tools",
    "description": "A human-friendly open-source HTTP client for testing APIs and inspecting requests and responses.",
    "purpose": "HTTPie makes API requests readable from the terminal. Use local or explicitly approved endpoints, avoid sharing authorization headers, and redact secrets before saving request examples.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://httpie.io/",
    "github": "https://github.com/httpie/cli",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt install httpie\nhttp --version",
      "arch": "sudo pacman -S httpie\nhttp --version",
      "mac": "brew install httpie\nhttp --version"
    },
    "docs": "https://httpie.io/docs/cli",
    "related": [],
    "command": "http GET https://httpbin.org/get",
    "commandNote": "Sends a simple GET request to a public request-inspection service; omit sensitive headers.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  },
  {
    "id": "ripgrep",
    "name": "ripgrep",
    "category": "Productivity & Utilities",
    "subcategory": "Command-Line Tools",
    "description": "A fast, open-source recursive text search tool with sensible defaults and respect for ignore files.",
    "purpose": "ripgrep helps search code, logs, and text collections locally. Use targeted patterns and avoid printing or copying secrets into public tickets or shared logs.",
    "difficulty": "Beginner",
    "price": "Free / Open source",
    "trustScore": 92,
    "platforms": [
      "System",
      "Kali",
      "Arch",
      "Debian"
    ],
    "website": "https://github.com/BurntSushi/ripgrep",
    "github": "https://github.com/BurntSushi/ripgrep",
    "benefits": [
      "Uses a source-available, community-maintained codebase",
      "Can be inspected and adapted to a repeatable workflow",
      "Links to upstream documentation and source repository"
    ],
    "useCases": [
      "Run a reproducible workflow in a controlled lab or owned environment",
      "Document evidence and findings for a defensive review",
      "Support learning and authorized security assessment"
    ],
    "install": {
      "debian": "sudo apt install ripgrep\nrg --version",
      "arch": "sudo pacman -S ripgrep\nrg --version",
      "mac": "brew install ripgrep\nrg --version"
    },
    "docs": "https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md",
    "related": [],
    "command": "rg -n \"TODO|FIXME\" ./",
    "commandNote": "Searches the current project folder for common markers.",
    "licenseNote": "Open-source project; verify the upstream license and any bundled components before redistribution."
  }
];
