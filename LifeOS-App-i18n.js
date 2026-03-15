const T_APP = {
    en: {
        app_title: "🚀 LifeOS",
        current_task_label: "Current Task:",
        layout_label: "🗺️ Layout:",
        day_start_label: "⚙️ Day Starts:",
        btn_inventory: "🎒 Inventory",
        btn_categories: "🏷️ Categories",
        btn_events: "📅 Events",
        btn_notes: "📝 Notes DB",
        btn_prompts: "🤖 AI Prompts",
        btn_new_task: "➕ New Task",
        btn_reset: "🔄 Reset",
        btn_sync: "💻 Sync JSON",
        btn_docs: "📚 Docs",

        modal_new_layout_title: "🗺️ Create New Layout",
        modal_new_layout_label: "Layout Name",
        modal_new_layout_placeholder: "e.g. Vacation, Week B...",
        btn_cancel: "Cancel",
        btn_create_layout: "Create Layout",

        modal_dup_layout_title: "📄 Duplicate Layout",
        modal_dup_layout_label: "Name of copy of",
        btn_duplicate_layout: "Duplicate",

        modal_ren_layout_title: "✏️ Rename Layout",
        modal_ren_layout_label: "New Name for",
        btn_rename_layout: "Rename",

        modal_del_layout_title: "Confirm Deletion",
        modal_del_layout_label: "Delete layout",
        modal_del_layout_warning: "This action is irreversible.",
        btn_delete_layout: "Delete",

        modal_stash_all_title: "📦 Stash All to Inventory",
        modal_stash_all_prompt: "Are you sure you want to empty your current calendar and move all tasks to the inventory?",
        modal_stash_all_desc: "This action will completely empty the current layout and cannot be undone all at once. Your tasks and notes will be safe in the inventory.",
        btn_stash_all_confirm: "Yes, Stash All",

        modal_inv_title: "🎒 Task Inventory",
        btn_stash_all: "📦 Stash Entire Board",
        modal_inv_desc: "Click a task to place it on your current calendar. We'll ask you to choose the day and time.",
        btn_close_inv: "Close Inventory",

        modal_task_title: "Edit Task",
        modal_task_name_label: "Task Name",
        modal_task_rename_global: "🌍 Rename globally (in all layouts)",
        modal_task_day_label: "Day",
        day_mon: "Monday",
        day_tue: "Tuesday",
        day_wed: "Wednesday",
        day_thu: "Thursday",
        day_fri: "Friday",
        day_sat: "Saturday",
        day_sun: "Sunday",
        modal_task_cat_label: "Category",
        modal_task_start_label: "Start",
        modal_task_end_label: "End",
        modal_task_notes_label: "Notes (Global, shared by name)",
        modal_task_ai_label: "AI Instructions (Metadata for BYOAI Engine)",
        modal_task_ai_desc: "💡 This text is attached automatically when running a prompt from the AI Manager.",
        btn_stash_task: "🎒 Stash",
        btn_delete_task: "🗑️",
        btn_duplicate_task: "Duplicate",
        btn_save: "Save",

        modal_notes_title: "📝 Central Note Manager",
        modal_notes_subtitle: "Manage active and archived notes across ALL Layouts",
        modal_notes_active_title: "🟢 Used in a Layout",
        modal_notes_archived_title: "🔴 Archived (Limit 15: Oldest are deleted)",
        modal_notes_badge_active: "ACTIVE",
        btn_delete_note: "🗑️ Delete Note Completely",
        btn_save_changes: "💾 Save Changes",
        btn_close: "Close",

        modal_prompts_title: "🤖 BYOAI Engine (Prompts Manager)",
        btn_new_prompt: "➕ New Agent",
        modal_prompts_desc: "Write custom System Prompts for your preferred LLMs. Upon extraction, the engine wraps your JSON and hidden metadata (AI Instructions for tasks) inside this master prompt.",
        modal_prompts_agents_title: "Your Agents",
        modal_prompts_name_placeholder: "e.g. Productivity Analyst",
        btn_delete_prompt: "🗑️",
        modal_prompts_text_placeholder: "Act as a productivity expert... Analyze the following JSON of my calendar and...",
        modal_prompts_auto_save: "💾 Auto-saving while typing",
        btn_run_prompt: "▶ Run Prompt + JSON",

        modal_sync_title: "Terminal - System Sync (JSON)",
        btn_sync_folder: "📂 Select Folder",
        sync_not_selected: "Not selected...",
        btn_sync_load: "⬇️ Load JSON",
        btn_sync_save: "💾 Save JSON Backup",
        console_init: "> LifeOS Data Engine Initialized.",
        console_instructions: "> Paste a valid JSON above and click 'Apply Changes' to inject a past or AI state.",
        btn_apply_changes: "▶ Apply Changes",

        modal_onboard_title: "Critical Storage Warning",
        modal_onboard_p1: "LifeOS is an application of <strong>absolute sovereignty and zero trust</strong>. There is no one harvesting your metrics and no corporate database.",
        modal_onboard_p2: "Your entire schedule and notes live exclusively in this browser (IndexedDB).",
        modal_onboard_warning: "If you clear your browser cache, use a system cleaner, or browse in Incognito, you will lose ALL data permanently.<br><br>There is no password recovery.",
        modal_onboard_tip: "💡 <strong>The Solution:</strong> Use the \"💻 Sync JSON\" button (The Sunday Sync) located in the top right regularly to download a hard backup to your local PC.",
        btn_onboard_ok: "I understand, I will take measures",

        // JS Dynamic Strings
        toast_layout_switched: "🗺️ Switched to Layout:",
        toast_layout_exists: "⚠️ That layout already exists.",
        toast_layout_created: "✨ Layout created. Open the inventory to build it!",
        toast_layout_duplicated: "📄 Layout duplicated to",
        toast_layout_name_in_use: "⚠️ That name is already in use.",
        toast_layout_renamed: "✅ Layout renamed to",
        toast_layout_delete_last: "⚠️ You cannot delete the last layout.",
        toast_layout_deleted: "🗑️ Layout deleted.",
        toast_stash_all: "📦 Entire board has been stashed in the inventory.",
        toast_note_saved: "💾 Note saved successfully",
        toast_note_deleted: "🗑️ Note deleted from database",
        prompt_unnamed: "Unnamed Prompt",
        toast_prompt_saved: "💾 Prompt saved successfully",
        toast_prompt_deleted: "🗑️ Prompt deleted",
        prompt_new: "New Prompt",
        toast_prompt_created: "✨ New prompt created",
        toast_prompt_select_first: "⚠️ Select a prompt first.",
        prompt_export_system: "SYSTEM PROMPT",
        prompt_export_calendar: "MY CALENDAR: Layout",
        prompt_export_tasks: "tasks",
        prompt_export_json_full: "FULL JSON DATA (for structured analysis)",
        prompt_export_end: "END OF CONTEXT",
        toast_prompt_copied: "📋 Prompt copied! Paste it in ChatGPT/Claude/Gemini, etc.",
        toast_missing_data: "⚠️ Missing required data.",
        toast_event_saved: "✅ Event saved.",
        toast_event_deleted: "🗑️ Event deleted",
        toast_legends_updated: "Legends updated!",
        toast_task_deleted: "🗑️ Task deleted from calendar",
        toast_task_duplicated: "✨ Task duplicated to inventory",
        toast_task_stashed: "🎒 Task moved to inventory",
        toast_task_created: "✨ Task created",
        err_no_category: "You haven't selected a category!",
        err_no_times: "You must define start and end times!",
        err_collision: "Time collides with another task on that day!",
        err_name_exists: "❌ Name already exists. Turn off global rename to link individually, or choose another name.",
        toast_sync_error: "⚠️ Invalid JSON",
        toast_sync_success: "✅ Database state INJECTED successfully. The engine has assimilated the data.",
        toast_select_file_first: "⚠️ Select a file from the list first.",
        toast_global_rename_applied: "🌍 All tasks changed to '{newName}'",
        toast_task_saved: "💾 Changes saved",
        toast_collision: "⚠️ Collision: Space occupied on calendar.",
        toast_group_duplicated: "✅ Group duplicated.",
        toast_duplication_mode_activated: "Duplication mode activated.",
        toast_week_reset: "✅ All restarted"
    },
    es: {
        app_title: "🚀 LifeOS",
        current_task_label: "Tarea Actual:",
        layout_label: "🗺️ Layout:",
        day_start_label: "⚙️ Día Inicia:",
        btn_inventory: "🎒 Inventario",
        btn_categories: "🏷️ Categorías",
        btn_events: "📅 Eventos",
        btn_notes: "📝 Base de Notas",
        btn_prompts: "🤖 AI Prompts",
        btn_new_task: "➕ Nueva Tarea",
        btn_reset: "🔄 Reiniciar",
        btn_sync: "💻 Sync JSON",
        btn_docs: "📚 Docs",

        modal_new_layout_title: "🗺️ Crear Nuevo Layout",
        modal_new_layout_label: "Nombre del Layout",
        modal_new_layout_placeholder: "Ej. Vacaciones, Semana B...",
        btn_cancel: "Cancelar",
        btn_create_layout: "Crear Layout",

        modal_dup_layout_title: "📄 Duplicar Layout",
        modal_dup_layout_label: "Nombre de la copia de",
        btn_duplicate_layout: "Duplicar",

        modal_ren_layout_title: "✏️ Renombrar Layout",
        modal_ren_layout_label: "Nuevo Nombre para",
        btn_rename_layout: "Renombrar",

        modal_del_layout_title: "Confirmar Eliminación",
        modal_del_layout_label: "¿Eliminar el layout",
        modal_del_layout_warning: "Esta acción es irreversible.",
        btn_delete_layout: "Eliminar",

        modal_stash_all_title: "📦 Guardar Todo en el Inventario",
        modal_stash_all_prompt: "¿Estás seguro de que deseas vaciar tu calendario actual y mover todas las tareas al inventario?",
        modal_stash_all_desc: "Esta acción vaciará el layout actual por completo y no se puede deshacer de golpe. Tus tareas y notas estarán a salvo en el inventario.",
        btn_stash_all_confirm: "Sí, Guardar Todo",

        modal_inv_title: "🎒 Inventario de Tareas",
        btn_stash_all: "📦 Guardar Todo el Tablero",
        modal_inv_desc: "Haz clic en una tarea para colocarla en tu calendario actual. Te pediremos que elijas el día y la hora.",
        btn_close_inv: "Cerrar Inventario",

        modal_task_title: "Editar Tarea",
        modal_task_name_label: "Nombre de la Tarea",
        modal_task_rename_global: "🌍 Renombrar globalmente (en todos los layouts)",
        modal_task_day_label: "Día",
        day_mon: "Lunes",
        day_tue: "Martes",
        day_wed: "Miércoles",
        day_thu: "Jueves",
        day_fri: "Viernes",
        day_sat: "Sábado",
        day_sun: "Domingo",
        modal_task_cat_label: "Categoría",
        modal_task_start_label: "Inicio",
        modal_task_end_label: "Fin",
        modal_task_notes_label: "Notas (Globales, compartidas por nombre)",
        modal_task_ai_label: "Instrucciones AI (Metadata para el BYOAI Engine)",
        modal_task_ai_desc: "💡 Este texto se adjunta automáticamente al ejecutar un prompt desde el AI Manager.",
        btn_stash_task: "🎒 Guardar",
        btn_delete_task: "🗑️",
        btn_duplicate_task: "Duplicar",
        btn_save: "Guardar",

        modal_notes_title: "📝 Gestor Central de Notas",
        modal_notes_subtitle: "Administra notas activas y archivadas en TODOS los Layouts",
        modal_notes_active_title: "🟢 Usadas en algún Layout",
        modal_notes_archived_title: "🔴 Archivadas (Límite de 15: Las más antiguas se borran)",
        modal_notes_badge_active: "ACTIVA",
        btn_delete_note: "🗑️ Eliminar Nota Totalmente",
        btn_save_changes: "💾 Guardar Cambios",
        btn_close: "Cerrar",

        modal_prompts_title: "🤖 Motor BYOAI (Prompts Manager)",
        btn_new_prompt: "➕ Nuevo Agente",
        modal_prompts_desc: "Escribe System Prompts personalizados para tus LLMs preferidos. Al extraer, el motor envuelve tu JSON y la metadata oculta (Instrucciones AI de las tareas) dentro de este prompt maestro.",
        modal_prompts_agents_title: "Tus Agentes",
        modal_prompts_name_placeholder: "Ej. Analista de Productividad",
        btn_delete_prompt: "🗑️",
        modal_prompts_text_placeholder: "Actúa como un experto en productividad... Analiza el siguiente JSON de mi calendario y...",
        modal_prompts_auto_save: "💾 Autoguardado al escribir",
        btn_run_prompt: "▶ Ejecutar Prompt + JSON",

        modal_sync_title: "Terminal - System Sync (JSON)",
        btn_sync_folder: "📂 Seleccionar Carpeta",
        sync_not_selected: "No seleccionado...",
        btn_sync_load: "⬇️ Cargar JSON",
        btn_sync_save: "💾 Guardar Backup JSON",
        console_init: "> LifeOS Data Engine Initialized.",
        console_instructions: "> Pega un JSON válido arriba y haz clic en 'Aplicar Cambios' para inyectar un estado pasado o de la AI.",
        btn_apply_changes: "▶ Aplicar Cambios",

        modal_onboard_title: "Advertencia Crítica de Almacenamiento",
        modal_onboard_p1: "LifeOS es una aplicación de <strong>soberanía absoluta y cero confianza</strong>. No hay nadie cosechando tus métricas y no hay base de datos corporativa.",
        modal_onboard_p2: "Todo tu horario y notas viven exclusivamente en este navegador (IndexedDB).",
        modal_onboard_warning: "Si limpias la caché de tu navegador, usas un limpiador de sistema, o navegas en Incógnito, perderás TODOS los datos permanentemente.<br><br>No hay recuperación de contraseña.",
        modal_onboard_tip: "💡 <strong>La Solución:</strong> Usa el botón \"💻 Sync JSON\" (La Sincronia Dominical) situado arriba a la derecha regularmente para descargar un backup duro a tu PC físico.",
        btn_onboard_ok: "Entiendo, tomaré mis medidas",

        // JS Dynamic Strings
        toast_layout_switched: "🗺️ Cambiado al Layout:",
        toast_layout_exists: "⚠️ Ese layout ya existe.",
        toast_layout_created: "✨ Layout creado. ¡Abre el inventario para construirlo!",
        toast_layout_duplicated: "📄 Layout duplicado a",
        toast_layout_name_in_use: "⚠️ Ese nombre ya está en uso.",
        toast_layout_renamed: "✅ Layout renombrado a",
        toast_layout_delete_last: "⚠️ No puedes eliminar el último layout.",
        toast_layout_deleted: "🗑️ Layout eliminado.",
        toast_stash_all: "📦 Todo el tablero ha sido guardado en el inventario.",
        toast_note_saved: "💾 Nota guardada exitosamente",
        toast_note_deleted: "🗑️ Nota eliminada de la base de datos",
        prompt_unnamed: "Prompt Sin Nombre",
        toast_prompt_saved: "💾 Prompt guardado exitosamente",
        toast_prompt_deleted: "🗑️ Prompt eliminado",
        prompt_new: "Nuevo Prompt",
        toast_prompt_created: "✨ Nuevo prompt creado",
        toast_prompt_select_first: "⚠️ Selecciona un prompt primero.",
        prompt_export_system: "SYSTEM PROMPT",
        prompt_export_calendar: "MI CALENDARIO: Layout",
        prompt_export_tasks: "tareas",
        prompt_export_json_full: "DATOS JSON COMPLETO (para análisis estructurado)",
        prompt_export_end: "FIN DEL CONTEXTO",
        toast_prompt_copied: "📋 ¡Prompt copiado! Pégalo en ChatGPT/Claude/Gemini, etc.",
        toast_missing_data: "⚠️ Faltan datos requeridos.",
        toast_event_saved: "✅ Evento guardado.",
        toast_event_deleted: "🗑️ Evento eliminado",
        toast_legends_updated: "¡Leyendas actualizadas!",
        toast_task_deleted: "🗑️ Tarea eliminada del calendario",
        toast_task_duplicated: "✨ Tarea duplicada al inventario",
        toast_task_stashed: "🎒 Tarea guardada en el inventario",
        toast_task_created: "✨ Tarea creada",
        err_no_category: "¡No has seleccionado categoría!",
        err_no_times: "¡Debes definir inicio y fin!",
        err_collision: "¡Horario choca con otra tarea en ese día!",
        err_name_exists: "❌ El nombre ya existe. Apaga el renombre global para unirla individualmente, o elige otro nombre.",
        toast_sync_error: "⚠️ JSON inválido",
        toast_sync_success: "✅ Estado de la base de datos INYECTADO con éxito. El motor ha asimilado los datos.",
        toast_select_file_first: "⚠️ Selecciona un archivo de la lista primero.",
        toast_global_rename_applied: "🌍 Todas las tareas cambiadas a '{newName}'",
        toast_task_saved: "💾 Cambios guardados",
        toast_collision: "⚠️ Colisión: Espacio ocupado en el calendario.",
        toast_group_duplicated: "✅ Grupo duplicado.",
        toast_duplication_mode_activated: "Modo duplicación activado.",
        toast_week_reset: "✅ Todo reiniciado"
    },
    pt: {
        app_title: "🚀 LifeOS",
        current_task_label: "Tarefa Atual:",
        layout_label: "🗺️ Layout:",
        day_start_label: "⚙️ Início do Dia:",
        btn_inventory: "🎒 Inventário",
        btn_categories: "🏷️ Categorias",
        btn_events: "📅 Eventos",
        btn_notes: "📝 Notas DB",
        btn_prompts: "🤖 Prompts de IA",
        btn_new_task: "➕ Nova Tarefa",
        btn_reset: "🔄 Reiniciar",
        btn_sync: "💻 Sincronizar JSON",
        btn_docs: "📚 Docs",

        modal_new_layout_title: "🗺️ Criar Novo Layout",
        modal_new_layout_label: "Nome do Layout",
        modal_new_layout_placeholder: "Ex. Férias, Semana B...",
        btn_cancel: "Cancelar",
        btn_create_layout: "Criar Layout",

        modal_dup_layout_title: "📄 Duplicar Layout",
        modal_dup_layout_label: "Nome da cópia de",
        btn_duplicate_layout: "Duplicar",

        modal_ren_layout_title: "✏️ Renomear Layout",
        modal_ren_layout_label: "Novo Nome para",
        btn_rename_layout: "Renomear",

        modal_del_layout_title: "Confirmar Exclusão",
        modal_del_layout_label: "Excluir layout",
        modal_del_layout_warning: "Esta ação é irreversível.",
        btn_delete_layout: "Excluir",

        modal_stash_all_title: "📦 Guardar Tudo no Inventário",
        modal_stash_all_prompt: "Tem certeza de que deseja esvaziar seu calendário atual e mover todas as tarefas para o inventário?",
        modal_stash_all_desc: "Esta ação esvaziará completamente o layout atual e não pode ser desfeita de uma vez. Suas tarefas e notas estarão seguras no inventário.",
        btn_stash_all_confirm: "Sim, Guardar Tudo",

        modal_inv_title: "🎒 Inventário de Tarefas",
        btn_stash_all: "📦 Guardar Todo o Quadro",
        modal_inv_desc: "Clique em uma tarefa para colocá-la em seu calendário atual. Pediremos que você escolha o dia e a hora.",
        btn_close_inv: "Fechar Inventário",

        modal_task_title: "Editar Tarefa",
        modal_task_name_label: "Nome da Tarefa",
        modal_task_rename_global: "🌍 Renomear globalmente (em todos os layouts)",
        modal_task_day_label: "Dia",
        day_mon: "Segunda-feira",
        day_tue: "Terça-feira",
        day_wed: "Quarta-feira",
        day_thu: "Quinta-feira",
        day_fri: "Sexta-feira",
        day_sat: "Sábado",
        day_sun: "Domingo",
        modal_task_cat_label: "Categoria",
        modal_task_start_label: "Início",
        modal_task_end_label: "Fim",
        modal_task_notes_label: "Notas (Globais, compartilhadas por nome)",
        modal_task_ai_label: "Instruções de IA (Metadados para Motor BYOAI)",
        modal_task_ai_desc: "💡 Este texto é anexado automaticamente ao executar um prompt do Gerenciador de IA.",
        btn_stash_task: "🎒 Guardar",
        btn_delete_task: "🗑️",
        btn_duplicate_task: "Duplicar",
        btn_save: "Salvar",

        modal_notes_title: "📝 Gerenciador Central de Notas",
        modal_notes_subtitle: "Gerenciar notas ativas e arquivadas em TODOS os Layouts",
        modal_notes_active_title: "🟢 Usadas em algum Layout",
        modal_notes_archived_title: "🔴 Arquivadas (Limite 15: As mais antigas são excluídas)",
        modal_notes_badge_active: "ATIVA",
        btn_delete_note: "🗑️ Excluir Nota Completamente",
        btn_save_changes: "💾 Salvar Alterações",
        btn_close: "Fechar",

        modal_prompts_title: "🤖 Motor BYOAI (Gerenciador de Prompts)",
        btn_new_prompt: "➕ Novo Agente",
        modal_prompts_desc: "Escreva System Prompts personalizados para seus LLMs preferidos. Ao extrair, o motor envolve seu JSON e metadados ocultos (Instruções de IA das tarefas) dentro deste prompt mestre.",
        modal_prompts_agents_title: "Seus Agentes",
        modal_prompts_name_placeholder: "Ex. Analista de Produtividade",
        btn_delete_prompt: "🗑️",
        modal_prompts_text_placeholder: "Atue como um especialista em produtividade... Analise o seguinte JSON do meu calendário e...",
        modal_prompts_auto_save: "💾 Salvamento automático ao digitar",
        btn_run_prompt: "▶ Executar Prompt + JSON",

        modal_sync_title: "Terminal - Sincronização do Sistema (JSON)",
        btn_sync_folder: "📂 Selecionar Pasta",
        sync_not_selected: "Não selecionado...",
        btn_sync_load: "⬇️ Carregar JSON",
        btn_sync_save: "💾 Salvar Backup JSON",
        console_init: "> LifeOS Data Engine Inicializado.",
        console_instructions: "> Cole um JSON válido acima e clique em 'Aplicar Alterações' para injetar um estado passado ou de IA.",
        btn_apply_changes: "▶ Aplicar Alterações",

        modal_onboard_title: "Aviso Crítico de Armazenamento",
        modal_onboard_p1: "LifeOS é um aplicativo de <strong>soberania absoluta e confiança zero</strong>. Não há ninguém colhendo suas métricas e não há banco de dados corporativo.",
        modal_onboard_p2: "Toda a sua agenda e notas vivem exclusivamente neste navegador (IndexedDB).",
        modal_onboard_warning: "Se você limpar o cache do seu navegador, usar um limpador de sistema ou navegar em modo Anônimo, você perderá TODOS os dados permanentemente.<br><br>Não há recuperação de senha.",
        modal_onboard_tip: "💡 <strong>A Solução:</strong> Use o botão \"💻 Sincronizar JSON\" (A Sincronia de Domingo) localizado no canto superior direito regularmente para baixar um backup rígido para o seu PC local.",
        btn_onboard_ok: "Eu entendo, tomarei minhas medidas",

        // JS Dynamic Strings
        toast_layout_switched: "🗺️ Mudou para o Layout:",
        toast_layout_exists: "⚠️ Esse layout já existe.",
        toast_layout_created: "✨ Layout criado. Abra o inventário para construí-lo!",
        toast_layout_duplicated: "📄 Layout duplicado para",
        toast_layout_name_in_use: "⚠️ Esse nome já está em uso.",
        toast_layout_renamed: "✅ Layout renomeado para",
        toast_layout_delete_last: "⚠️ Você não pode excluir o último layout.",
        toast_layout_deleted: "🗑️ Layout excluído.",
        toast_stash_all: "📦 Todo o quadro foi guardado no inventário.",
        toast_note_saved: "💾 Nota salva com sucesso",
        toast_note_deleted: "🗑️ Nota excluída do banco de dados",
        prompt_unnamed: "Prompt Sem Nome",
        toast_prompt_saved: "💾 Prompt salvo com sucesso",
        toast_prompt_deleted: "🗑️ Prompt excluído",
        prompt_new: "Novo Prompt",
        toast_prompt_created: "✨ Novo prompt criado",
        toast_prompt_select_first: "⚠️ Selecione um prompt primeiro.",
        prompt_export_system: "SYSTEM PROMPT",
        prompt_export_calendar: "MEU CALENDÁRIO: Layout",
        prompt_export_tasks: "tarefas",
        prompt_export_json_full: "DADOS JSON COMPLETO (para análise estruturada)",
        prompt_export_end: "FIM DO CONTEXTO",
        toast_prompt_copied: "📋 Prompt copiado! Cole-o no ChatGPT/Claude/Gemini, etc.",
        toast_missing_data: "⚠️ Faltam dados necessários.",
        toast_event_saved: "✅ Evento salvo.",
        toast_event_deleted: "🗑️ Evento excluído",
        toast_legends_updated: "Lendas atualizadas!",
        toast_task_deleted: "🗑️ Tarefa excluída do calendário",
        toast_task_duplicated: "✨ Tarefa duplicada para o inventário",
        toast_task_stashed: "🎒 Tarefa guardada no inventário",
        toast_task_created: "✨ Tarefa criada",
        err_no_category: "Você não selecionou uma categoria!",
        err_no_times: "Você deve definir horários de início e fim!",
        err_collision: "O horário entra em conflito com outra tarefa nesse dia!",
        err_name_exists: "❌ O nome já existe. Desligue a renomeação global para vincular individualmente ou escolha outro nome.",
        toast_sync_error: "⚠️ JSON inválido",
        toast_sync_success: "✅ Estado do banco de dados INJETADO com sucesso. O motor assimilou os dados.",
        toast_select_file_first: "⚠️ Selecione um arquivo da lista primeiro.",
        toast_global_rename_applied: "🌍 Todas as tarefas alteradas para '{newName}'",
        toast_task_saved: "💾 Alterações salvas",
        toast_collision: "⚠️ Colisão: Espaço ocupado no calendário.",
        toast_group_duplicated: "✅ Grupo duplicado.",
        toast_duplication_mode_activated: "Modo de duplicação ativado.",
        toast_week_reset: "✅ Tudo reiniciado"
    }
};

let currentAppLang = localStorage.getItem('lifeos_lang') || 'es';

function applyAppTranslations(lang) {
    if (!T_APP[lang]) lang = 'es';
    currentAppLang = lang;
    localStorage.setItem('lifeos_lang', lang);

    // Swap all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (T_APP[lang][key]) {
            if (el.tagName.toLowerCase() === 'input' && el.type === 'text') {
                el.placeholder = T_APP[lang][key];
            } else if (el.tagName.toLowerCase() === 'textarea') {
                el.placeholder = T_APP[lang][key];
            } else {
                el.innerHTML = T_APP[lang][key];
            }
        }
    });

    // Handle day headers
    const dayHeaders = document.querySelectorAll('.day-header[id^="dh-"]');
    const dayNamesAbbr = {
        en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        es: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        pt: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
    };
    if (dayHeaders.length === 7) {
        dayHeaders.forEach((el, index) => {
            el.innerText = dayNamesAbbr[lang][index];
        });
    }

    // Toggle active classes on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active-lang-btn');
        } else {
            btn.classList.remove('active-lang-btn');
        }
    });
}

function t(key) {
    return T_APP[currentAppLang][key] || key;
}

// Ensure it applies on load
document.addEventListener('DOMContentLoaded', () => {
    applyAppTranslations(currentAppLang);

    // Attach listener to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            applyAppTranslations(lang);
        });
    });
});
