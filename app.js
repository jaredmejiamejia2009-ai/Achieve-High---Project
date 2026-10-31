"use strict";

(() => {
    // LEVEL UP: HIGH SCHOOL
    // Main application and data configuration

    const STORAGE_KEY = "levelUpStudent.v1";

    const $ = (selector) => document.querySelector(selector);

    // GRADUATION PLANNING GOALS
    // Adapt these to your school's official rules.

    const graduationGoals = [
        {
            id: "courses",
            title: "Required Courses and Credits",
            detail: "Confirm your required credits with your school counselor."
        },
        {
            id: "literacy",
            title: "Literacy and Assessments",
            detail: "Check the assessments required in your jurisdiction."
        },
        {
            id: "service",
            title: "Community Service",
            detail: "Verify whether volunteer hours are required."
        },
        {
            id: "electives",
            title: "Electives and Prerequisites",
            detail: "Plan electives that support your future interests."
        },
        {
            id: "records",
            title: "Review Graduation Progress",
            detail: "Check your official graduation progress with your school."
        }
    ];

    // ---------- CAREER PATHS ---------- //
    // Students may explore multiple paths.

    const paths = [
        {
            id: "stem",
            name: "STEM",
            icon: "🔬",
            description: "Science, technology, engineering, and mathematics.",
            quests: ["science-fair", "coding", "math-challenge"]
        },
        {
            id: "business",
            name: "Business",
            icon: "📈",
            description: "Entrepreneurship, finance, marketing, and leadership.",
            quests: ["business-plan", "budget", "leadership"]
        },
        {
            id: "arts",
            name: "Arts",
            icon: "🎨",
            description: "Visual arts, music, design, and creative expression.",
            quests: ["portfolio", "showcase", "publication"]
        },
        {
            id: "health",
            name: "Health Sciences",
            icon: "🩺",
            description: "Health education, biology, and community wellbeing.",
            quests: ["health-research", "first-aid", "wellbeing"]
        },
        {
            id: "humanities",
            name: "Humanities",
            icon: "📚",
            description: "History, languages, writing, and society.",
            quests: ["essay", "publication", "volunteering"]
        },
        {
            id: "trades",
            name: "Skilled Trades",
            icon: "🛠️",
            description: "Technical skills, practical projects, and construction.",
            quests: ["maker", "career-interview", "safety"]
        }
    ];

    // QUEST CATALOG
    // XP is awarded when a quest is completed.

    const quests = [
        {
            id: "study",
            title: "Master Your Study Routine",
            category: "Academic",
            icon: "📘",
            xp: 40,
            description: "Follow a realistic study schedule for two weeks.",
            goal: "Follow my study plan for two weeks.",
            paths: ["stem", "business", "health", "humanities"]
        },
        {
            id: "science-fair",
            title: "Science Fair Challenger",
            category: "Academic",
            icon: "🧪",
            xp: 80,
            description: "Investigate a question and present your findings.",
            goal: "Complete and present a science investigation.",
            paths: ["stem", "health"]
        },
        {
            id: "coding",
            title: "Build Something with Code",
            category: "Career",
            icon: "💻",
            xp: 70,
            description: "Build a small website, game, or digital tool.",
            goal: "Build and demonstrate a coding project.",
            paths: ["stem", "arts", "business"]
        },
        {
            id: "math-challenge",
            title: "Problem Solver",
            category: "Academic",
            icon: "🧩",
            xp: 50,
            description: "Solve a challenging math problem or explore a competition.",
            goal: "Solve and explain a challenging math problem.",
            paths: ["stem", "business"]
        },
        {
            id: "leadership",
            title: "Lead with Purpose",
            category: "Leadership",
            icon: "🏅",
            xp: 80,
            description: "Help organize a school club, project, or event.",
            goal: "Plan or support a meaningful school activity.",
            paths: ["business", "humanities", "arts"]
        },
        {
            id: "volunteering",
            title: "Community Hero",
            category: "Community",
            icon: "🤝",
            xp: 60,
            description: "Contribute to a cause you genuinely care about.",
            goal: "Complete a volunteer activity and reflect on its impact.",
            paths: ["humanities", "health", "business"]
        },
        {
            id: "portfolio",
            title: "Create Your Portfolio",
            category: "Creative",
            icon: "🖼️",
            xp: 70,
            description: "Collect examples of your work and explain your process.",
            goal: "Create a portfolio with three examples of my work.",
            paths: ["arts", "stem"]
        },
        {
            id: "showcase",
            title: "Share Your Creativity",
            category: "Creative",
            icon: "🎭",
            xp: 60,
            description: "Submit artwork, music, or a performance to a showcase.",
            goal: "Prepare and share one creative work.",
            paths: ["arts", "humanities"]
        },
        {
            id: "publication",
            title: "Tell a Story",
            category: "Creative",
            icon: "✍️",
            xp: 60,
            description: "Write an article or story for a school publication.",
            goal: "Complete and submit a piece of writing.",
            paths: ["arts", "humanities", "business"]
        },
        {
            id: "business-plan",
            title: "Startup Thinker",
            category: "Career",
            icon: "🚀",
            xp: 80,
            description: "Develop a business idea and explain its value.",
            goal: "Create a one-page business plan.",
            paths: ["business", "arts", "stem"]
        },
        {
            id: "budget",
            title: "Money Skills",
            category: "Academic",
            icon: "💰",
            xp: 50,
            description: "Create a sample budget and explore saving strategies.",
            goal: "Create and explain a sample budget.",
            paths: ["business", "humanities"]
        },
        {
            id: "health-research",
            title: "Health Science Explorer",
            category: "Career",
            icon: "🧬",
            xp: 70,
            description: "Research a health topic using credible sources.",
            goal: "Create an evidence-based health science presentation.",
            paths: ["health", "stem"]
        },
        {
            id: "first-aid",
            title: "Prepared to Help",
            category: "Community",
            icon: "🩹",
            xp: 60,
            description: "Find an appropriate first-aid course or workshop.",
            goal: "Find and review a suitable first-aid learning opportunity.",
            paths: ["health", "trades"]
        },
        {
            id: "wellbeing",
            title: "Wellbeing Advocate",
            category: "Community",
            icon: "🌿",
            xp: 50,
            description: "Support a positive and inclusive school initiative.",
            goal: "Help plan a positive wellbeing activity.",
            paths: ["health", "humanities"]
        },
        {
            id: "essay",
            title: "Voice Your Ideas",
            category: "Academic",
            icon: "📝",
            xp: 60,
            description: "Write an essay or enter a suitable writing contest.",
            goal: "Complete and revise an essay about a topic I care about.",
            paths: ["humanities", "arts"]
        },
        {
            id: "maker",
            title: "Maker Workshop",
            category: "Career",
            icon: "🔧",
            xp: 70,
            description: "Build something using safe, approved tools.",
            goal: "Complete a practical project and document my learning.",
            paths: ["trades", "stem", "arts"]
        },
        {
            id: "career-interview",
            title: "Meet a Professional",
            category: "Career",
            icon: "🗣️",
            xp: 60,
            description: "Learn about a professional's work and training.",
            goal: "Prepare five questions for a career conversation.",
            paths: ["trades", "business", "health", "stem", "humanities", "arts"]
        },
        {
            id: "safety",
            title: "Safety First",
            category: "Career",
            icon: "🦺",
            xp: 50,
            description: "Complete an introductory workplace safety lesson.",
            goal: "Complete an appropriate safety lesson or workshop.",
            paths: ["trades", "health", "stem"]
        }
    ];

    // ---------- ACHIEVEMENTS ---------- //

    const achievements = [
        {
            id: "first",
            title: "First Steps",
            icon: "🌟",
            description: "Complete your first quest.",
            test: (s) => s.completed.length >= 1
        },
        {
            id: "five",
            title: "Quest Collector",
            icon: "🏆",
            description: "Complete five quests.",
            test: (s) => s.completed.length >= 5
        },
        {
            id: "explorer",
            title: "Curious Mind",
            icon: "🧭",
            description: "Explore three career paths.",
            test: (s) => s.exploredPaths.length >= 3
        },
        {
            id: "all-paths",
            title: "Open Horizons",
            icon: "🌌",
            description: "Explore all six career paths.",
            test: (s) => s.exploredPaths.length === paths.length
        },
        {
            id: "planner",
            title: "Master Planner",
            icon: "📅",
            description: "Start three different quests.",
            test: (s) => Object.keys(s.questState).length >= 3
        },
        {
            id: "graduation",
            title: "Main Story Planner",
            icon: "🎓",
            description: "Review every graduation planning goal.",
            test: (s) => s.gradGoals.length === graduationGoals.length
        }
    ];

    // INITIAL STUDENT PROGRESS

    function createInitialState() {
        return {
            xp: 0,
            questState: {},
            completed: [],
            exploredPaths: [],
            gradGoals: [],
            unlocked: [],
            reminders: {},
            notified: []
        };
    }

    let state = createInitialState();

    // Quest currently being created or edited.
    let selectedQuestId = null;

    // Selected career filters. Students can select several.
    let selectedPaths = new Set();

    // Toast notification timer.
    let toastTimer = null;

    // LOAD SAVED PROGRESS

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);

            if (!raw) {
                return createInitialState();
            }

            const saved = JSON.parse(raw);

            if (
                !saved ||
                typeof saved !== "object" ||
                Array.isArray(saved)
            ) {
                throw new Error("Invalid saved progress format.");
            }

            const data = {
                ...createInitialState(),
                ...saved
            };

            // Validate the student's XP.
            data.xp =
                Number.isFinite(data.xp) && data.xp >= 0
                    ? Math.floor(data.xp)
                    : 0;

            // Validate objects.
            ["questState", "reminders"].forEach((key) => {
                if (
                    !data[key] ||
                    typeof data[key] !== "object" ||
                    Array.isArray(data[key])
                ) {
                    data[key] = {};
                }
            });

            // Validate arrays.
            [
                "completed",
                "exploredPaths",
                "gradGoals",
                "unlocked",
                "notified"
            ].forEach((key) => {
                if (!Array.isArray(data[key])) {
                    data[key] = [];
                }
            });

            // Build lists of legitimate IDs.
            const questIds = new Set(
                quests.map((quest) => quest.id)
            );

            const pathIds = new Set(
                paths.map((path) => path.id)
            );

            const goalIds = new Set(
                graduationGoals.map((goal) => goal.id)
            );

            const achievementIds = new Set(
                achievements.map((achievement) => achievement.id)
            );

            // Remove invalid and duplicate entries.
            data.completed = [...new Set(
                data.completed.filter((id) => questIds.has(id))
            )];

            data.exploredPaths = [...new Set(
                data.exploredPaths.filter((id) => pathIds.has(id))
            )];

            data.gradGoals = [...new Set(
                data.gradGoals.filter((id) => goalIds.has(id))
            )];

            data.unlocked = [...new Set(
                data.unlocked.filter((id) => achievementIds.has(id))
            )];

            data.notified = [...new Set(
                data.notified.filter((id) => typeof id === "string")
            )];

            // Remove malformed quest states.
            Object.keys(data.questState).forEach((id) => {
                const questStatus = data.questState[id];

                if (
                    !questIds.has(id) ||
                    !questStatus ||
                    typeof questStatus !== "object" ||
                    !["active", "completed"].includes(questStatus.status)
                ) {
                    delete data.questState[id];
                }
            });

            // Ensure completed quests stay completed.
            data.completed.forEach((id) => {
                if (data.questState[id]) {
                    data.questState[id].status = "completed";
                } else {
                    data.questState[id] = {
                        status: "completed"
                    };
                }
            });

            // Remove invalid reminders.
            Object.entries(data.reminders).forEach(([id, reminder]) => {
                if (
                    !questIds.has(id) ||
                    !reminder ||
                    typeof reminder !== "object" ||
                    typeof reminder.dateTime !== "string" ||
                    !Number.isFinite(Date.parse(reminder.dateTime))
                ) {
                    delete data.reminders[id];
                }
            });

            return data;

        } catch (error) {
            console.error("Could not load saved progress:", error);

            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch (storageError) {
                console.warn("Could not clear invalid saved progress:", storageError);
            }

            return createInitialState();
        }
    }

    // SAVE STUDENT PROGRESS

    function saveState() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state)
            );

            return true;

        } catch (error) {
            console.error("Could not save student progress:", error);

            showToast(
                "Progress could not be saved. Check your browser storage settings."
            );

            return false;
        }
    }

    // SAFE HTML AND NOTIFICATION UTILITIES

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, (character) => {
            const replacements = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return replacements[character];
        });
    }

    function showToast(message) {
        const toast = $("#toast");

        // The HTML element will be created in a later chunk.
        if (!toast) {
            console.log(message);
            return;
        }

        toast.textContent = message;
        toast.classList.add("show");

        if (toastTimer) {
            clearTimeout(toastTimer);
        }

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    }

    // QUEST LOOKUP

    function getQuest(id) {
        return quests.find((quest) => quest.id === id) || null;
    }

    // STUDENT LEVEL AND XP

    function getStudentLevel() {
        return Math.floor(state.xp / 100) + 1;
    }

    function getLevelProgress() {
        return state.xp % 100;
    }

    function getStudentRank() {
        const ranks = [
            "New Explorer",
            "Curious Learner",
            "Quest Adventurer",
            "Rising Achiever",
            "Future Builder",
            "Master Explorer"
        ];

        const level = getStudentLevel();

        return ranks[Math.min(level - 1, ranks.length - 1)];
    }

    // ACHIEVEMENT UNLOCKING

    function updateAchievements() {
        const newlyUnlocked = [];

        achievements.forEach((achievement) => {
            const alreadyUnlocked = state.unlocked.includes(
                achievement.id
            );

            if (
                !alreadyUnlocked &&
                achievement.test(state)
            ) {
                state.unlocked.push(achievement.id);
                newlyUnlocked.push(achievement);
            }
        });

        return newlyUnlocked;
    }

    // DEFAULT REMINDER DATE

    function defaultReminderDate() {
        const date = new Date(Date.now() + 86400000);

        // Default reminder: tomorrow at 6:00 PM.
        date.setHours(18, 0, 0, 0);

        // Handle unusual date/time edge cases.
        if (date.getTime() <= Date.now()) {
            return new Date(Date.now() + 86400000);
        }

        return date;
    }

    // LOCAL DATE AND TIME HELPERS

    function localDateString(date) {
        const pad = (number) =>
            String(number).padStart(2, "0");

        return (
            date.getFullYear() +
            "-" +
            pad(date.getMonth() + 1) +
            "-" +
            pad(date.getDate())
        );
    }

    function localTimeString(date) {
        const pad = (number) =>
            String(number).padStart(2, "0");

        return (
            pad(date.getHours()) +
            ":" +
            pad(date.getMinutes())
        );
    }

    function parseLocalDateTime(dateString, timeString) {
        // Reject incorrectly formatted inputs.
        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(dateString) ||
            !/^\d{2}:\d{2}$/.test(timeString)
        ) {
            return null;
        }

        const date = new Date(
            `${dateString}T${timeString}:00`
        );

        // Reject impossible dates and times.
        if (
            !Number.isFinite(date.getTime()) ||
            localDateString(date) !== dateString ||
            localTimeString(date) !== timeString
        ) {
            return null;
        }

        return date;
    }

    // DISPLAY DATE AND TIME

    function formatDate(value) {
        const date = new Date(value);

        if (!Number.isFinite(date.getTime())) {
            return "Invalid date";
        }

        return new Intl.DateTimeFormat(undefined, {
            dateStyle: "medium",
            timeStyle: "short"
        }).format(date);
    }

    // ---------- DASHBOARD: LEVEL, RANK, AND XP ---------- //

    function renderDashboard() {
        const level = getStudentLevel();
        const progress = getLevelProgress();

        const rankElement = $("#rank");
        const xpElement = $("#xp");
        const xpBar = $("#xp-bar");
        const xpNext = $("#xp-next");
        const completedCount = $("#completed-count");
        const activeCount = $("#active-count");
        const pathCount = $("#path-count");

        if (
            !rankElement ||
            !xpElement ||
            !xpBar ||
            !xpNext ||
            !completedCount ||
            !activeCount ||
            !pathCount
        ) {
            console.warn("Some dashboard elements are missing.");
            return;
        }

        rankElement.textContent = getStudentRank();
        xpElement.textContent = state.xp;
        xpBar.style.width = `${progress}%`;
        xpNext.textContent = `${100 - progress} XP to the next level`;

        completedCount.textContent = state.completed.length;

        activeCount.textContent = Object.values(state.questState)
            .filter((quest) => quest.status === "active")
            .length;

        pathCount.textContent =
            `${state.exploredPaths.length} / ${paths.length}`;

        const levelElement = $("#student-level");

        if (levelElement) {
            levelElement.textContent = `Level ${level}`;
        }
    }

    // GRADUATION REQUIREMENTS CHECKLIST

    function renderGraduation() {
        const list = $("#graduation-list");

        if (!list) {
            console.warn("Graduation checklist element is missing.");
            return;
        }

        list.innerHTML = "";

        graduationGoals.forEach((goal) => {
            const checked = state.gradGoals.includes(goal.id);
            const label = document.createElement("label");

            label.className = "check-item";

            label.innerHTML = `
        <input
          type="checkbox"
          data-grad-id="${escapeHTML(goal.id)}"
          ${checked ? "checked" : ""}
        >

        <span>
          <strong>${escapeHTML(goal.title)}</strong>
          <small>${escapeHTML(goal.detail)}</small>
        </span>
      `;

            list.appendChild(label);
        });

        const completed = state.gradGoals.length;
        const total = graduationGoals.length;
        const percentage = Math.round((completed / total) * 100);

        const summary = $("#grad-summary");
        const percent = $("#grad-percent");
        const bar = $("#grad-bar");

        if (summary) {
            summary.textContent =
                `${completed} of ${total} planning goals reviewed`;
        }

        if (percent) {
            percent.textContent = `${percentage}%`;
        }

        if (bar) {
            bar.style.width = `${percentage}%`;
        }
    }

    // QUEST BOARD

    function renderQuests() {
        const list = $("#quest-list");

        if (!list) {
            console.warn("Quest list element is missing.");
            return;
        }

        list.innerHTML = "";

        const categoryFilter = $("#category-filter");
        const searchInput = $("#quest-search");

        const category = categoryFilter
            ? categoryFilter.value
            : "all";

        const search = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        const filteredQuests = quests.filter((quest) => {
            const matchesCategory =
                category === "all" ||
                quest.category === category;

            const searchableText = [
                quest.title,
                quest.description,
                quest.category,
                quest.goal
            ].join(" ").toLowerCase();

            const matchesSearch =
                searchableText.includes(search);

            const matchesCareer =
                selectedPaths.size === 0 ||
                quest.paths.some((pathId) =>
                    selectedPaths.has(pathId)
                );

            return (
                matchesCategory &&
                matchesSearch &&
                matchesCareer
            );
        });

        if (filteredQuests.length === 0) {
            list.innerHTML = `
        <p class="empty-state">
          No quests match your filters.
          Try another search or explore another career path.
        </p>
      `;
            return;
        }

        filteredQuests.forEach((quest) => {
            const questProgress = state.questState[quest.id];
            const status = questProgress
                ? questProgress.status
                : "available";

            const card = document.createElement("article");

            card.className = "quest-card panel";

            const statusText = {
                available: "Available quest",
                active: "⚡ Quest in progress",
                completed: "✓ Quest completed"
            };

            let buttonText = "Start quest";

            if (status === "active") {
                buttonText = "Edit reminder";
            } else if (status === "completed") {
                buttonText = "Completed";
            }

            card.innerHTML = `
        <div class="quest-meta">
          <span>${escapeHTML(quest.icon)}</span>
          <span>${escapeHTML(quest.category)}</span>
          <span>+${quest.xp} XP</span>
        </div>

        <h3>${escapeHTML(quest.title)}</h3>

        <p>${escapeHTML(quest.description)}</p>

        <p class="card-status">
          ${escapeHTML(statusText[status] || statusText.available)}
        </p>

        <div class="quest-card-footer">
          <span class="small">
            ${quest.paths.length} related career paths
          </span>

          <button
            class="button ${status === "available" ? "primary" : "secondary"}"
            type="button"
            data-quest-id="${escapeHTML(quest.id)}"
            ${status === "completed" ? "disabled" : ""}
          >
            ${escapeHTML(buttonText)}
          </button>
        </div>
      `;

            list.appendChild(card);
        });
    }

    // CAREER PATH SKILL TREE

    function renderSkills() {
        const tree = $("#skill-tree");

        if (!tree) {
            console.warn("Career skill tree element is missing.");
            return;
        }

        tree.innerHTML = "";

        paths.forEach((path) => {
            const selected = selectedPaths.has(path.id);
            const explored = state.exploredPaths.includes(path.id);

            const relatedQuests = quests.filter((quest) =>
                quest.paths.includes(path.id)
            );

            const completedRelated = relatedQuests.filter((quest) =>
                state.completed.includes(quest.id)
            ).length;

            const card = document.createElement("article");

            card.className = [
                "skill-card",
                "panel",
                selected ? "selected" : "",
                explored ? "explored" : ""
            ].filter(Boolean).join(" ");

            card.innerHTML = `
        <div class="skill-symbol">
          ${escapeHTML(path.icon)}
        </div>

        <h3>${escapeHTML(path.name)}</h3>

        <p>${escapeHTML(path.description)}</p>

        <div class="skill-progress">
          ${completedRelated} / ${relatedQuests.length} related quests completed
        </div>

        <p class="small">
          ${explored ? "✓ Path explored" : "Discover this path"}
        </p>

        <button
          class="button secondary"
          type="button"
          data-path-id="${escapeHTML(path.id)}"
        >
          ${selected ? "Remove filter" : "Explore this path"}
        </button>
      `;

            tree.appendChild(card);
        });

        const clearButton = $("#clear-path-filters");

        if (clearButton) {
            clearButton.hidden = selectedPaths.size === 0;
        }
    }

    // ACTIVE QUESTS AND REMINDERS

    function renderReminders() {
        const list = $("#reminder-list");

        if (!list) {
            console.warn("Reminder list element is missing.");
            return;
        }

        list.innerHTML = "";

        const activeQuests = Object.entries(state.questState)
            .filter(([id, progress]) =>
                progress.status === "active" &&
                getQuest(id)
            );

        if (activeQuests.length === 0) {
            list.innerHTML = `
        <p class="empty-state">
          No active quests yet.
          Start a quest to create your first reminder.
        </p>
      `;
            return;
        }

        activeQuests.forEach(([id]) => {
            const quest = getQuest(id);
            const reminder = state.reminders[id];

            const card = document.createElement("article");
            card.className = "reminder-card panel";

            const reminderDate = reminder
                ? formatDate(reminder.dateTime)
                : "Not scheduled";

            card.innerHTML = `
        <div class="reminder-info">
          <h3>
            ${escapeHTML(quest.icon)}
            ${escapeHTML(quest.title)}
          </h3>

          <p>${escapeHTML(reminder?.message || quest.goal)}</p>

          <p class="small">
            Reminder: ${escapeHTML(reminderDate)}
          </p>
        </div>

        <div class="reminder-actions">
          <button
            class="button secondary"
            type="button"
            data-edit-reminder="${escapeHTML(id)}"
          >
            Edit reminder
          </button>

          <button
            class="button secondary"
            type="button"
            data-export-reminder="${escapeHTML(id)}"
          >
            Add to calendar
          </button>

          <button
            class="button primary"
            type="button"
            data-complete-quest="${escapeHTML(id)}"
          >
            Complete quest
          </button>
        </div>
      `;

            list.appendChild(card);
        });
    }

    // ACHIEVEMENT COLLECTION

    function renderAchievements() {
        const list = $("#achievement-list");

        if (!list) {
            console.warn("Achievement list element is missing.");
            return;
        }

        list.innerHTML = "";

        achievements.forEach((achievement) => {
            const unlocked = state.unlocked.includes(achievement.id);

            const card = document.createElement("article");

            card.className = [
                "achievement-card",
                "panel",
                unlocked ? "unlocked" : "locked"
            ].join(" ");

            card.innerHTML = `
        <div class="medal">
          ${unlocked ? escapeHTML(achievement.icon) : "🔒"}
        </div>

        <h3>${escapeHTML(achievement.title)}</h3>

        <p>${escapeHTML(achievement.description)}</p>

        <p class="small">
          ${unlocked ? "Achievement unlocked!" : "Locked achievement"}
        </p>
      `;

            list.appendChild(card);
        });
    }

    // REFRESH THE ENTIRE INTERFACE

    function renderAll() {
        renderDashboard();
        renderGraduation();
        renderQuests();
        renderSkills();
        renderReminders();
        renderAchievements();
    }

    // ---------- QUEST FORM AND REMINDER MANAGEMENT ---------- //

    // Open the quest form and populate its fields.
    function openQuestForm(questId) {
        const quest = getQuest(questId);

        if (!quest) {
            showToast("That quest could not be found. Please try again.");
            return;
        }

        if (state.completed.includes(questId)) {
            showToast("This quest has already been completed.");
            return;
        }

        selectedQuestId = questId;

        const form = $("#quest-form");
        const title = $("#quest-form-title");
        const goalInput = $("#quest-goal");
        const dateInput = $("#reminder-date");
        const timeInput = $("#reminder-time");
        const messageInput = $("#reminder-message");

        if (
            !form ||
            !title ||
            !goalInput ||
            !dateInput ||
            !timeInput ||
            !messageInput
        ) {
            showToast(
                "The quest form is missing an HTML element. Check your index.html."
            );
            return;
        }

        const existingReminder = state.reminders[questId];
        const defaultDate = defaultReminderDate();

        const reminderDate = existingReminder
            ? new Date(existingReminder.dateTime)
            : defaultDate;

        title.textContent = state.questState[questId]
            ? `Edit Quest: ${quest.title}`
            : `Start Quest: ${quest.title}`;

        goalInput.value = quest.goal;

        dateInput.value = localDateString(reminderDate);
        timeInput.value = localTimeString(reminderDate);

        messageInput.value = existingReminder?.message || quest.goal;

        // Set the earliest allowed reminder date to today.
        dateInput.min = localDateString(new Date());

        form.hidden = false;

        // Move keyboard focus to the form heading if possible.
        title.setAttribute("tabindex", "-1");
        title.focus();

        form.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    // Close the quest form.
    function closeQuestForm() {
        const form = $("#quest-form");

        if (form) {
            form.hidden = true;
        }

        selectedQuestId = null;
    }

    // VALIDATE QUEST FORM INPUTS

    function validateQuestForm() {
        const goalInput = $("#quest-goal");
        const dateInput = $("#reminder-date");
        const timeInput = $("#reminder-time");
        const messageInput = $("#reminder-message");

        if (
            !goalInput ||
            !dateInput ||
            !timeInput ||
            !messageInput
        ) {
            return {
                valid: false,
                error: "The form is incomplete. Refresh the page and try again."
            };
        }

        const goal = goalInput.value.trim();
        const message = messageInput.value.trim();

        if (goal.length < 3) {
            return {
                valid: false,
                error: "Your quest goal must contain at least 3 characters."
            };
        }

        if (goal.length > 250) {
            return {
                valid: false,
                error: "Your quest goal cannot exceed 250 characters."
            };
        }

        if (message.length < 3) {
            return {
                valid: false,
                error: "Your reminder must contain at least 3 characters."
            };
        }

        if (message.length > 200) {
            return {
                valid: false,
                error: "Your reminder cannot exceed 200 characters."
            };
        }

        const reminderDate = parseLocalDateTime(
            dateInput.value,
            timeInput.value
        );

        if (!reminderDate) {
            return {
                valid: false,
                error: "Enter a valid reminder date and time."
            };
        }

        if (reminderDate.getTime() <= Date.now()) {
            return {
                valid: false,
                error: "Choose a reminder time in the future."
            };
        }

        return {
            valid: true,
            goal,
            message,
            reminderDate
        };
    }

    // START OR UPDATE A QUEST

    function saveQuestForm(event) {
        if (event) {
            event.preventDefault();
        }

        if (!selectedQuestId) {
            showToast("Choose a quest before saving.");
            return;
        }

        const quest = getQuest(selectedQuestId);

        if (!quest) {
            showToast("This quest no longer exists.");
            closeQuestForm();
            return;
        }

        if (state.completed.includes(selectedQuestId)) {
            showToast("This quest is already completed.");
            closeQuestForm();
            renderAll();
            return;
        }

        const result = validateQuestForm();

        if (!result.valid) {
            showToast(result.error);
            return;
        }

        const wasActive =
            state.questState[selectedQuestId]?.status === "active";

        // Save the previous data in case persistence fails.
        const previousState = JSON.stringify(state);

        try {
            state.questState[selectedQuestId] = {
                status: "active",
                goal: result.goal,
                updatedAt: new Date().toISOString()
            };

            state.reminders[selectedQuestId] = {
                dateTime: result.reminderDate.toISOString(),
                message: result.message
            };

            if (!wasActive) {
                showToast("Quest started! Your reminder is scheduled.");
            } else {
                showToast("Your quest and reminder have been updated.");
            }

            // Re-evaluate achievements after starting the quest.
            const newlyUnlocked = updateAchievements();

            const saved = saveState();

            if (!saved) {
                // Restore the previous in-memory state on save failure.
                state = JSON.parse(previousState);
                renderAll();
                return;
            }

            closeQuestForm();
            renderAll();

            newlyUnlocked.forEach((achievement) => {
                showToast(`Achievement unlocked: ${achievement.title}!`);
            });

        } catch (error) {
            console.error("Could not save quest:", error);

            try {
                state = JSON.parse(previousState);
            } catch (restoreError) {
                console.error("Could not restore previous state:", restoreError);
            }

            showToast("Something went wrong. Your previous progress was restored.");
            renderAll();
        }
    }

    // EDIT AN EXISTING REMINDER

    function editReminder(questId) {
        if (!state.questState[questId]) {
            showToast("Start this quest before editing its reminder.");
            return;
        }

        if (state.questState[questId].status !== "active") {
            showToast("Only active quests can have their reminders edited.");
            return;
        }

        openQuestForm(questId);
    }

    // EXPORT REMINDERS TO A CALENDAR

    function downloadCalendarEvent(questId) {
        const quest = getQuest(questId);
        const reminder = state.reminders[questId];

        if (!quest || !reminder) {
            showToast("No reminder is available for this quest.");
            return;
        }

        const start = new Date(reminder.dateTime);

        if (
            !Number.isFinite(start.getTime()) ||
            start.getTime() <= Date.now()
        ) {
            showToast("This reminder is in the past. Edit it first.");
            return;
        }

        // Calendar events use UTC timestamps.
        function formatICSDate(date) {
            return date.toISOString()
                .replace(/[-:]/g, "")
                .replace(/\.\d{3}/, "");
        }

        // Escape text according to the iCalendar format.
        function escapeICS(value) {
            return String(value)
                .replace(/\\/g, "\\\\")
                .replace(/\r?\n/g, "\\n")
                .replace(/,/g, "\\,")
                .replace(/;/g, "\\;");
        }

        const end = new Date(start.getTime() + 30 * 60 * 1000);

        const uid =
            `${questId}-${start.getTime()}@levelupstudent.local`;

        const calendarContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Level Up Student//Quest Planner//EN",
            "CALSCALE:GREGORIAN",
            "BEGIN:VEVENT",
            `UID:${uid}`,
            `DTSTAMP:${formatICSDate(new Date())}`,
            `DTSTART:${formatICSDate(start)}`,
            `DTEND:${formatICSDate(end)}`,
            `SUMMARY:${escapeICS("Level Up Quest: " + quest.title)}`,
            `DESCRIPTION:${escapeICS(reminder.message)}`,
            "BEGIN:VALARM",
            "TRIGGER:-PT0M",
            "ACTION:DISPLAY",
            `DESCRIPTION:${escapeICS(reminder.message)}`,
            "END:VALARM",
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n") + "\r\n";

        try {
            const blob = new Blob(
                [calendarContent],
                { type: "text/calendar;charset=utf-8" }
            );

            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = url;
            link.download = `quest-${questId}.ics`;

            document.body.appendChild(link);
            link.click();
            link.remove();

            // Delay cleanup to allow the browser to start the download.
            setTimeout(() => URL.revokeObjectURL(url), 1000);

            showToast(
                "Calendar event downloaded. Open the file to import it into your calendar."
            );

        } catch (error) {
            console.error("Calendar export failed:", error);

            showToast(
                "Could not export the calendar event. Try another browser."
            );
        }
    }

    // ---------- COMPLETE A QUEST AND AWARD XP ---------- //

    function completeQuest(questId) {
        const quest = getQuest(questId);

        if (!quest) {
            showToast("Quest not found. Please refresh and try again.");
            return;
        }

        const progress = state.questState[questId];

        if (!progress || progress.status !== "active") {
            showToast("Start this quest before completing it.");
            return;
        }

        if (state.completed.includes(questId)) {
            showToast("You have already earned XP for this quest.");
            renderAll();
            return;
        }

        const previousState = JSON.stringify(state);

        try {
            // Record completion before evaluating achievements.
            state.completed.push(questId);

            state.questState[questId] = {
                ...progress,
                status: "completed",
                completedAt: new Date().toISOString()
            };

            // XP is awarded only once for each quest.
            state.xp += quest.xp;

            const newlyUnlocked = updateAchievements();

            if (!saveState()) {
                // Roll back the transaction if saving fails.
                state = JSON.parse(previousState);
                renderAll();
                return;
            }

            renderAll();

            showToast(
                `Quest complete! +${quest.xp} XP earned.`
            );

            newlyUnlocked.forEach((achievement) => {
                showToast(
                    `Achievement unlocked: ${achievement.title}!`
                );
            });

        } catch (error) {
            console.error("Quest completion failed:", error);

            try {
                state = JSON.parse(previousState);
            } catch (restoreError) {
                console.error("Could not restore previous state:", restoreError);
            }

            renderAll();

            showToast(
                "Quest completion failed. Your previous progress was restored."
            );
        }
    }

    // EXPLORE A CAREER PATH

    function toggleCareerPath(pathId) {
        const path = paths.find((item) => item.id === pathId);

        if (!path) {
            showToast("Career path not found.");
            return;
        }

        const previouslyExplored = state.exploredPaths.includes(pathId);
        const previouslySelected = selectedPaths.has(pathId);

        if (previouslySelected) {
            selectedPaths.delete(pathId);
        } else {
            selectedPaths.add(pathId);
        }

        // Record exploration independently of the active filter.
        if (!previouslyExplored) {
            state.exploredPaths.push(pathId);

            const newlyUnlocked = updateAchievements();

            if (!saveState()) {
                // Preserve the user's previous exploration data.
                state.exploredPaths = state.exploredPaths.filter(
                    (id) => id !== pathId
                );

                selectedPaths.delete(pathId);

                if (previouslySelected) {
                    selectedPaths.add(pathId);
                }

                renderAll();
                return;
            }

            showToast(
                `Career path explored: ${path.name}.`
            );

            newlyUnlocked.forEach((achievement) => {
                showToast(
                    `Achievement unlocked: ${achievement.title}!`
                );
            });

        } else {
            showToast(
                selectedPaths.has(pathId)
                    ? `Showing quests related to ${path.name}.`
                    : `Removed the ${path.name} quest filter.`
            );
        }

        renderSkills();
        renderQuests();
        renderDashboard();
        renderAchievements();
    }

    // CLEAR CAREER FILTERS

    function clearCareerFilters() {
        selectedPaths.clear();

        renderSkills();
        renderQuests();

        showToast("Showing quests from every career path.");
    }

    // GRADUATION CHECKLIST CHANGES

    function toggleGraduationGoal(goalId, checked) {
        const goal = graduationGoals.find(
            (item) => item.id === goalId
        );

        if (!goal) {
            showToast("Graduation planning goal not found.");
            renderGraduation();
            return;
        }

        const previousState = JSON.stringify(state);

        if (checked) {
            if (!state.gradGoals.includes(goalId)) {
                state.gradGoals.push(goalId);
            }
        } else {
            state.gradGoals = state.gradGoals.filter(
                (id) => id !== goalId
            );
        }

        const newlyUnlocked = updateAchievements();

        if (!saveState()) {
            state = JSON.parse(previousState);
            renderAll();
            return;
        }

        renderGraduation();
        renderDashboard();
        renderAchievements();

        newlyUnlocked.forEach((achievement) => {
            showToast(
                `Achievement unlocked: ${achievement.title}!`
            );
        });
    }

    // EVENT DELEGATION
    // Handles dynamically generated buttons.

    function handleDocumentClick(event) {
        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        // Start or edit a quest.
        const questButton = target.closest("[data-quest-id]");

        if (questButton) {
            const questId = questButton.dataset.questId;

            if (questId) {
                openQuestForm(questId);
            }

            return;
        }

        // Explore a career path.
        const pathButton = target.closest("[data-path-id]");

        if (pathButton) {
            const pathId = pathButton.dataset.pathId;

            if (pathId) {
                toggleCareerPath(pathId);
            }

            return;
        }

        // Edit an active quest reminder.
        const editButton = target.closest("[data-edit-reminder]");

        if (editButton) {
            editReminder(editButton.dataset.editReminder);
            return;
        }

        // Export a reminder to a calendar file.
        const exportButton = target.closest("[data-export-reminder]");

        if (exportButton) {
            downloadCalendarEvent(
                exportButton.dataset.exportReminder
            );

            return;
        }

        // Complete an active quest.
        const completeButton = target.closest("[data-complete-quest]");

        if (completeButton) {
            completeQuest(completeButton.dataset.completeQuest);
            return;
        }

        // Clear career filters.
        if (target.closest("#clear-path-filters")) {
            clearCareerFilters();
            return;
        }

        // Close the quest form.
        if (target.closest("#cancel-quest")) {
            closeQuestForm();
        }
    }

    // CHECKLIST EVENT DELEGATION

    function handleDocumentChange(event) {
        const target = event.target;

        if (!(target instanceof HTMLInputElement)) {
            return;
        }

        const goalId = target.dataset.gradId;

        if (goalId) {
            toggleGraduationGoal(goalId, target.checked);
        }
    }

    // QUEST SEARCH AND CATEGORY FILTERING

    function handleQuestFilters() {
        renderQuests();
    }

    // FORM SUBMISSION

    function handleQuestFormSubmit(event) {
        if (!(event.target instanceof HTMLFormElement)) {
            return;
        }

        if (event.target.id !== "quest-form") {
            return;
        }

        saveQuestForm(event);
    }

    // CONNECT ALL EVENT HANDLERS
    // Called once during app initialization.

    function bindEvents() {
        // Prevent accidental duplicate listeners.
        if (document.documentElement.dataset.levelUpBound === "true") {
            return;
        }

        document.documentElement.dataset.levelUpBound = "true";

        document.addEventListener(
            "click",
            handleDocumentClick
        );

        document.addEventListener(
            "change",
            handleDocumentChange
        );

        const questForm = $("#quest-editor");

        if (questForm) {
            questForm.addEventListener("submit", handleQuestFormSubmit);
        }

        const cancelBottom = $("#cancel-quest-bottom");

        if (cancelBottom) {
            cancelBottom.addEventListener("click", closeQuestForm);
        }

        const searchInput = $("#quest-search");
        const categoryFilter = $("#category-filter");

        if (searchInput) {
            searchInput.addEventListener(
                "input",
                handleQuestFilters
            );
        }

        if (categoryFilter) {
            categoryFilter.addEventListener(
                "change",
                handleQuestFilters
            );
        }

        // Optional reset button. The final HTML chunk may include it.
        const resetButton = $("#reset-progress");

        if (resetButton) {
            resetButton.addEventListener("click", resetProgress);
        }
    }

    // RESET STUDENT PROGRESS

    function resetProgress() {
        const confirmed = window.confirm(
            "Reset all XP, achievements, quests, and graduation planning progress? This cannot be undone."
        );

        if (!confirmed) {
            return;
        }

        const previousState = JSON.stringify(state);

        state = createInitialState();
        selectedPaths.clear();
        selectedQuestId = null;

        if (!saveState()) {
            state = JSON.parse(previousState);
            renderAll();

            showToast("Progress could not be reset.");
            return;
        }

        closeQuestForm();
        renderAll();

        showToast("Your progress has been reset.");
    }

    // ---------- FINAL ERROR RECOVERY ---------- //

    function showFatalError(message) {
        console.error("Level Up application error:", message);

        const container = $("#app-error");

        if (container) {
            container.hidden = false;
            container.textContent = message;
            return;
        }

        // Avoid interrupting the student with repeated dialogs.
        console.warn(
            "Add an element with id='app-error' to index.html to display errors."
        );
    }

    // INITIALIZE APPLICATION

    function initializeApp() {
        try {
            // Verify that essential browser features exist.
            if (
                typeof document === "undefined" ||
                typeof localStorage === "undefined"
            ) {
                showFatalError(
                    "Your browser does not support the features needed by this application."
                );
                return;
            }

            // Restore the student's previously saved progress.
            state = loadState();

            // Make sure previously completed quests have valid status.
            state.completed.forEach((questId) => {
                if (!state.questState[questId]) {
                    state.questState[questId] = {
                        status: "completed"
                    };
                } else {
                    state.questState[questId].status = "completed";
                }
            });

            // Recalculate achievement eligibility.
            // Existing unlocks remain preserved.
            const newlyUnlocked = updateAchievements();

            // Save only when there are newly unlocked achievements.
            if (newlyUnlocked.length > 0) {
                saveState();
            }

            // Connect buttons, filters, and forms.
            bindEvents();

            // Display the restored application.
            renderAll();

            // Inform students if their browser storage is unavailable.
            if (state.xp > 0 || state.completed.length > 0) {
                console.info("Student progress restored successfully.");
            }

            newlyUnlocked.forEach((achievement) => {
                showToast(
                    `Achievement unlocked: ${achievement.title}!`
                );
            });

            console.info("Level Up Student is ready.");

        } catch (error) {
            console.error("Application initialization failed:", error);

            showFatalError(
                "The application could not start correctly. Refresh the page and try again."
            );
        }
    }

    // START APPLICATION AFTER HTML IS READY

    function startApplication() {
        initializeApp();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            startApplication,
            { once: true }
        );
    } else {
        startApplication();
    }

})(); // END OF LEVEL UP STUDENT APPLICATION
