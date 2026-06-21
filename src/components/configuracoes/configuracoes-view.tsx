"use client";

import { useState } from "react";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import {
  SelectField,
  SensitivityField,
  SettingsSection,
  TextField,
  ToggleField,
  ReadOnlyField,
  UploadField,
  ColorField,
  ThemeField,
} from "@/components/configuracoes/settings-field";
import {
  alertaFrequencias,
  configuracoesKpiData,
  defaultConfiguracoes,
  iaFrequencias,
  iaRecursos,
  politicasSenha,
  sensibilidadeNiveis,
  sessoesSimultaneasOpcoes,
  settingsTabs,
  temasSistema,
  temposSessao,
  type ConfiguracoesState,
  type SettingsTabId,
} from "@/lib/configuracoes-data";

function SummaryRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl bg-prevpro-gray/30 px-3 py-2.5 transition-colors hover:bg-prevpro-gray/50">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm shadow-sm">
          {icon}
        </span>
        <span className="text-sm text-slate-500">{label}</span>
      </div>
      <div className="shrink-0 text-right">{children}</div>
    </li>
  );
}

function SettingsTabPanel({
  activeTab,
  settings,
  onUpdate,
}: {
  activeTab: SettingsTabId;
  settings: ConfiguracoesState;
  onUpdate: <K extends keyof ConfiguracoesState>(
    section: K,
    field: keyof ConfiguracoesState[K],
    value: ConfiguracoesState[K][keyof ConfiguracoesState[K]]
  ) => void;
}) {
  switch (activeTab) {
    case "empresa":
      return (
        <div className="space-y-8">
          <SettingsSection
            title="Dados da Empresa"
            description="Informações cadastrais exibidas em relatórios e comunicações"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                label="Nome da empresa"
                value={settings.empresa.nome}
                onChange={(v) => onUpdate("empresa", "nome", v)}
              />
              <TextField
                label="CNPJ"
                value={settings.empresa.cnpj}
                onChange={(v) => onUpdate("empresa", "cnpj", v)}
              />
            </div>
            <TextField
              label="Endereço"
              value={settings.empresa.endereco}
              onChange={(v) => onUpdate("empresa", "endereco", v)}
            />
            <TextField
              label="Responsável"
              value={settings.empresa.responsavel}
              onChange={(v) => onUpdate("empresa", "responsavel", v)}
            />
          </SettingsSection>

          <SettingsSection
            title="Identidade da Empresa"
            description="Personalize a aparência do PrevPro para sua rede"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UploadField
                label="Upload de Logo"
                description="PNG ou SVG · máx. 2MB"
                fileName="logo-supermax.png"
              />
              <UploadField
                label="Upload de Favicon"
                description="ICO ou PNG · 32x32px"
                fileName="favicon-prevpro.ico"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ColorField
                label="Cor principal"
                value={settings.identidade.corPrincipal}
                onChange={(v) => onUpdate("identidade", "corPrincipal", v)}
              />
              <ColorField
                label="Cor secundária"
                value={settings.identidade.corSecundaria}
                onChange={(v) => onUpdate("identidade", "corSecundaria", v)}
              />
            </div>
          </SettingsSection>
        </div>
      );

    case "alertas":
      return (
        <SettingsSection
          title="Canais de Notificação"
          description="Defina como os alertas serão enviados aos usuários"
        >
          <ToggleField
            label="Email"
            description="Enviar alertas por e-mail corporativo"
            checked={settings.alertas.email}
            onChange={(v) => onUpdate("alertas", "email", v)}
          />
          <ToggleField
            label="WhatsApp"
            description="Notificações via WhatsApp Business"
            checked={settings.alertas.whatsapp}
            onChange={(v) => onUpdate("alertas", "whatsapp", v)}
          />
          <ToggleField
            label="Push"
            description="Notificações no navegador e aplicativo"
            checked={settings.alertas.push}
            onChange={(v) => onUpdate("alertas", "push", v)}
          />
          <SelectField
            label="Frequência"
            value={settings.alertas.frequencia}
            options={alertaFrequencias}
            onChange={(v) => onUpdate("alertas", "frequencia", v)}
          />
        </SettingsSection>
      );

    case "ia":
      return (
        <div className="space-y-8">
          <SettingsSection
            title="Inteligência Artificial"
            description="Configure o comportamento da IA de prevenção de perdas"
          >
            <ToggleField
              label="IA ativa"
              description="Habilitar análises e alertas inteligentes"
              checked={settings.ia.ativa}
              onChange={(v) => onUpdate("ia", "ativa", v)}
            />
            <SensitivityField
              label="Sensibilidade da IA"
              value={settings.ia.sensibilidade}
              options={sensibilidadeNiveis}
              onChange={(v) => onUpdate("ia", "sensibilidade", v as ConfiguracoesState["ia"]["sensibilidade"])}
              hint="Níveis mais altos geram mais alertas preventivos"
            />
            <SelectField
              label="Frequência de análise"
              value={settings.ia.frequenciaAnalise}
              options={iaFrequencias}
              onChange={(v) => onUpdate("ia", "frequenciaAnalise", v)}
            />
          </SettingsSection>

          <SettingsSection
            title="Recursos Ativos"
            description="Funcionalidades habilitadas da IA PrevPro"
          >
            {iaRecursos.map((recurso) => (
              <ToggleField
                key={recurso.key}
                label={recurso.label}
                description={recurso.description}
                checked={settings.ia[recurso.key]}
                onChange={(v) => onUpdate("ia", recurso.key, v)}
              />
            ))}
          </SettingsSection>
        </div>
      );

    case "seguranca":
      return (
        <SettingsSection
          title="Políticas de Segurança"
          description="Controle de acesso e proteção de dados"
        >
          <ToggleField
            label="Autenticação em dois fatores"
            description="Exigir verificação adicional no login"
            checked={settings.seguranca.doisFatores}
            onChange={(v) => onUpdate("seguranca", "doisFatores", v)}
          />
          <ToggleField
            label="Troca obrigatória de senha"
            description="Forçar renovação periódica de senhas"
            checked={settings.seguranca.trocaObrigatoriaSenha}
            onChange={(v) => onUpdate("seguranca", "trocaObrigatoriaSenha", v)}
          />
          <SelectField
            label="Política de senha"
            value={settings.seguranca.politicaSenha}
            options={politicasSenha}
            onChange={(v) => onUpdate("seguranca", "politicaSenha", v)}
          />
          <SelectField
            label="Tempo limite de sessão"
            value={settings.seguranca.tempoSessao}
            options={temposSessao}
            onChange={(v) => onUpdate("seguranca", "tempoSessao", v)}
          />
          <ToggleField
            label="Bloqueio após tentativas inválidas"
            description="Bloquear conta após 5 tentativas incorretas"
            checked={settings.seguranca.bloqueioTentativas}
            onChange={(v) => onUpdate("seguranca", "bloqueioTentativas", v)}
          />
          <SelectField
            label="Sessões simultâneas permitidas"
            value={settings.seguranca.sessoesSimultaneas}
            options={sessoesSimultaneasOpcoes}
            onChange={(v) => onUpdate("seguranca", "sessoesSimultaneas", v)}
          />
        </SettingsSection>
      );

    case "sistema":
      return (
        <div className="space-y-8">
          <SettingsSection
            title="Configurações do Sistema"
            description="Manutenção, auditoria e informações da plataforma"
          >
            <ToggleField
              label="Backup automático"
              description="Realizar backup diário dos dados"
              checked={settings.sistema.backupAutomatico}
              onChange={(v) => onUpdate("sistema", "backupAutomatico", v)}
            />
            <ToggleField
              label="Logs de auditoria"
              description="Registrar ações dos usuários no sistema"
              checked={settings.sistema.logs}
              onChange={(v) => onUpdate("sistema", "logs", v)}
            />
            <ReadOnlyField
              label="Versão do sistema"
              value={settings.sistema.versao}
            />
          </SettingsSection>

          <SettingsSection
            title="Tema do Sistema"
            description="Ajuste a aparência visual da plataforma"
          >
            <ThemeField
              label="Modo de exibição"
              value={settings.sistema.tema}
              options={temasSistema}
              onChange={(v) => onUpdate("sistema", "tema", v as ConfiguracoesState["sistema"]["tema"])}
            />
          </SettingsSection>
        </div>
      );
  }
}

export function ConfiguracoesView() {
  const [activeTab, setActiveTab] = useState<SettingsTabId>("empresa");
  const [settings, setSettings] = useState<ConfiguracoesState>(defaultConfiguracoes);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const activeTabInfo = settingsTabs.find((tab) => tab.id === activeTab)!;

  function updateSetting<
    K extends keyof ConfiguracoesState,
    F extends keyof ConfiguracoesState[K],
  >(section: K, field: F, value: ConfiguracoesState[K][F]) {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
    setSavedMessage(null);
  }

  function handleSave() {
    setSavedMessage("Configurações salvas com sucesso.");
  }

  function handleReset() {
    setSettings(defaultConfiguracoes);
    setSavedMessage("Configurações restauradas para os valores padrão.");
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Configurações"
        subtitle="Central de configurações do sistema PrevPro"
        className="lg:hidden"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {configuracoesKpiData.map((kpi, index) => (
          <KpiCard key={kpi.title} {...kpi} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <div className="animate-fade-in-up animate-delay-200 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)]">
            <div className="border-b border-slate-100 bg-gradient-to-r from-prevpro-gray/60 to-prevpro-gray/30 p-3 sm:p-4">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {settingsTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`group relative flex shrink-0 flex-col items-center gap-1.5 rounded-2xl px-4 py-3 transition-all duration-300 sm:min-w-[100px] sm:px-5 sm:py-3.5 ${
                        isActive
                          ? "bg-white text-prevpro-blue shadow-md shadow-prevpro-blue/10"
                          : "text-slate-500 hover:bg-white/70 hover:text-slate-700 hover:shadow-sm"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-prevpro-blue transition-all duration-300" />
                      )}
                      <span
                        className={`text-2xl transition-transform duration-300 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                        aria-hidden="true"
                      >
                        {tab.icon}
                      </span>
                      <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
              <h2 className="text-lg font-semibold text-slate-800">
                {activeTabInfo.label}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {activeTabInfo.description}
              </p>
            </div>

            <div className="p-5 sm:p-7">
              <SettingsTabPanel
                activeTab={activeTab}
                settings={settings}
                onUpdate={updateSetting}
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-100 bg-prevpro-gray/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              {savedMessage ? (
                <p className="text-sm font-medium text-prevpro-green">{savedMessage}</p>
              ) : (
                <p className="text-xs text-slate-400">
                  Alterações não salvas serão perdidas ao sair
                </p>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-prevpro-blue/30 hover:bg-prevpro-gray"
                >
                  Restaurar Padrões
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-xl bg-prevpro-blue px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-prevpro-blue/20 transition-all hover:bg-[#0d3f6b] hover:shadow-lg"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-6">
          <div className="animate-fade-in-up animate-delay-250 overflow-hidden rounded-2xl border border-prevpro-blue/25 bg-gradient-to-br from-prevpro-blue via-[#1565A8] to-[#0a3d6b] p-5 text-white shadow-lg shadow-prevpro-blue/20 sm:p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-lg">⭐</span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                Plano Atual
              </h3>
            </div>
            <p className="mt-4 text-2xl font-bold">Plano {settings.plano.nome}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                <p className="text-[10px] font-medium uppercase tracking-wide text-white/60">Lojas</p>
                <p className="mt-0.5 text-lg font-bold">{settings.plano.lojas}</p>
              </div>
              <div className="rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                <p className="text-[10px] font-medium uppercase tracking-wide text-white/60">Usuários</p>
                <p className="mt-0.5 text-lg font-bold">{settings.plano.usuarios}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/30">
                IA Ativa
              </span>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                2FA Habilitado
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-300 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_3px_rgba(15,76,129,0.06),0_4px_12px_rgba(15,76,129,0.04)] sm:p-6">
            <h3 className="text-sm font-semibold text-slate-800">Resumo Rápido</h3>
            <ul className="mt-4 space-y-2">
              <SummaryRow icon="🏢" label="Empresa">
                <span className="text-sm font-semibold text-slate-700">{settings.empresa.nome}</span>
              </SummaryRow>
              <SummaryRow icon="⭐" label="Plano contratado">
                <span className="rounded-full bg-prevpro-blue/10 px-2.5 py-0.5 text-xs font-semibold text-prevpro-blue">
                  {settings.plano.nome}
                </span>
              </SummaryRow>
              <SummaryRow icon="🏬" label="Quantidade de lojas">
                <span className="text-sm font-semibold text-slate-700">{settings.plano.lojas}</span>
              </SummaryRow>
              <SummaryRow icon="👥" label="Quantidade de usuários">
                <span className="text-sm font-semibold text-slate-700">{settings.plano.usuarios}</span>
              </SummaryRow>
              <SummaryRow icon="🧠" label="IA PrevPro">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    settings.ia.ativa
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {settings.ia.ativa ? "Ativa" : "Inativa"}
                </span>
              </SummaryRow>
              <SummaryRow icon="🔒" label="Segurança 2FA">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    settings.seguranca.doisFatores
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {settings.seguranca.doisFatores ? "Habilitado" : "Desabilitado"}
                </span>
              </SummaryRow>
              <SummaryRow icon="📦" label="Versão do sistema">
                <span className="text-xs font-medium text-slate-600">{settings.sistema.versao}</span>
              </SummaryRow>
            </ul>
          </div>

          <div className="animate-fade-in-up animate-delay-400 rounded-2xl border border-prevpro-blue/20 bg-gradient-to-br from-prevpro-blue/5 to-transparent p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-prevpro-blue/10 text-lg">
                💡
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">Dica</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Mantenha a IA ativa com sensibilidade Alta para detectar padrões
                  de perda com maior antecedência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
